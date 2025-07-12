import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { AccessoryState } from '../data/accessory';
import { AppointmentState } from '../data/appointment';
import { Brand } from '../data/brand';
import { ClinicState } from '../data/clinic';
import { CustomerState, Gender } from '../data/customer';
import { DeviceState } from '../data/device';
import { DoctorState } from '../data/doctor';
import { EmployeeState } from '../data/employee';
import { Entity } from '../data/entity';
import { Store } from '../data/lite-store';
import { OrderState } from '../data/order';
import { ProcessState } from '../data/process';
import { RoomState } from '../data/room';
import { ServiceState } from '../data/service';
import { ShopState } from '../data/shop';
import { UserToken } from '../data/user-token';
import { UtilityState } from '../data/utility';

export type StateType = { [key in Entity]?: any };

export interface State extends StateType {
  [Entity.Doctor]: DoctorState;
  [Entity.Clinic]: ClinicState;
  [Entity.Room]: RoomState;
  [Entity.Employee]: EmployeeState;
  [Entity.Shop]: ShopState;
  [Entity.Service]: ServiceState;
  [Entity.Utility]: UtilityState;
  [Entity.Accessory]: AccessoryState;
  [Entity.Device]: DeviceState;
  [Entity.Process]: ProcessState;
  [Entity.Order]: OrderState;
  [Entity.Appointment]: AppointmentState;
  [Entity.Customer]: CustomerState;
}

const initialState: State = {
  [Entity.Doctor]: { entities: {}, ids: [], loading: false },
  [Entity.Clinic]: { entities: {}, ids: [], loading: false },
  [Entity.Room]: { entities: {}, ids: [], loading: false },
  [Entity.Employee]: { entities: {}, ids: [], loading: false },
  [Entity.Shop]: { entities: {}, ids: [], loading: false },
  [Entity.Service]: { entities: {}, ids: [], loading: false },
  [Entity.Utility]: { entities: {}, ids: [], loading: false },
  [Entity.Accessory]: { entities: {}, ids: [], loading: false },
  [Entity.Device]: { entities: {}, ids: [], loading: false },
  [Entity.Process]: { entities: {}, ids: [], loading: false },
  [Entity.Order]: { entities: {}, ids: [], loading: false },
  [Entity.Appointment]: { entities: {}, ids: [], loading: false },
  [Entity.Customer]: { entities: {}, ids: [], loading: false },
};

@Injectable({
  providedIn: 'root',
})
export class CoreService extends Store<State> {
  private apiUrl = `${environment.apiUrl}/`;

  private http = inject(HttpClient);

  private toastrService = inject(NbToastrService);

  private stateTest$ = this.state$
    .pipe(tap((res) => console.log(res, 'entities')))
    .subscribe();

  brands$ = new BehaviorSubject<string[]>(Object.values(Brand));

  gender$ = new BehaviorSubject<string[]>(Object.values(Gender));

  user$ = new BehaviorSubject<UserToken | null>(null);

  constructor() {
    super(initialState);
  }

  get<T>(entity: Entity, params?: any) {
    return this.http
      .get<T>(`${this.apiUrl}${entity}`, {
        params: new HttpParams({ fromObject: params || {} }),
      })
      .pipe(
        catchError((err) => this.handleError(err)),
        tap((entities) => this.loadEntities(entity, entities))
      );
  }

  getById<T>(entity: Entity, id: number, params?: any) {
    return this.http
      .get<T>(`${this.apiUrl}${entity}/${id}`, {
        params: new HttpParams({ fromObject: params || {} }),
      })
      .pipe(catchError((err) => this.handleError(err)));
  }

  post<T>(value: T, entity: Entity): Observable<unknown> {
    return this.http.post<unknown>(`${this.apiUrl}${entity}`, value).pipe(
      tap(() => this.showSuccessMessage()),
      catchError((err) => this.handleError(err))
    );
  }

  put<T>(value: T, entity: Entity): Observable<unknown> {
    return this.http.put<unknown>(`${this.apiUrl}${entity}`, value).pipe(
      tap(() => this.showSuccessMessage()),
      catchError((err) => this.handleError(err))
    );
  }

  patch<T>(path: string, value: T, entity: Entity): Observable<unknown> {
    return this.http
      .patch<unknown>(`${this.apiUrl}${entity}/${path}`, value)
      .pipe(
        tap(() => this.showSuccessMessage()),
        catchError((err) => this.handleError(err))
      );
  }

  delete(id: number, entity: Entity): Observable<unknown> {
    return this.http.delete<unknown>(`${this.apiUrl}${entity}/${id}`).pipe(
      tap(() => this.showSuccessMessage()),
      catchError((err) => this.handleError(err))
    );
  }

  // STATE MANAGEMENT FOR ENTITIES
  loadEntities(entity: Entity, entities: any) {
    this.setState(() => {
      return {
        [entity]: {
          entities: this.toEntities(entities),
          loading: true,
          ids: Object.keys(this.toEntities(entities)),
        },
      };
    });
  }

  clearEntities(entity: Entity) {
    this.setState(() => {
      return {
        [entity]: {
          entities: {},
          loading: false,
          ids: [],
        },
      };
    });
  }

  addEntity(entity: Entity, value: any) {
    this.setState((state) => {
      return {
        [state[entity]]: {
          entities: {
            ...state[entity].entities,
            [value.id]: value,
          },
        },
      };
    });
  }

  removeEntity(entity: Entity, id: any['id']) {
    this.setState((state) => {
      const { [id]: removed, ...entities } = state[entity].entities;
      return { [state[entity]]: { entities } };
    });
  }

  getEntities$<T>(entity: Entity): Observable<T> {
    return this.state$.pipe(map((state) => state[entity]));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    this.toastrService.danger(`${error.message}`, 'Server Error', {
      duration: 10000,
    });
    // Return an observable with a user-facing error message.
    return of([]);
  }

  private showSuccessMessage(): void {
    this.toastrService.success('Operation completed', 'Success');
  }
}
