import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { of } from 'rxjs';
import { Observable } from 'rxjs-compat';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { ClinicState } from '../data/clinic';
import { DoctorState } from '../data/doctor';
import { Entity } from '../data/entity';
import { Store } from './lite-store';

export type StateType = { [key in Entity]?: any };

export interface State extends StateType {
  [Entity.Doctor]: DoctorState;
  [Entity.Clinic]: ClinicState;
}

const initialState: State = {
  [Entity.Doctor]: { entities: {}, ids: [], loading: false },
  [Entity.Clinic]: { entities: {}, ids: [], loading: false },
};

@Injectable({
  providedIn: 'root',
})
export class CoreService extends Store<State> {
  private apiUrl = `${environment.apiUrl}/`;

  private http = inject(HttpClient);

  private toastrService = inject(NbToastrService);

  constructor() {
    super(initialState);
  }

  get<T>(entity: Entity) {
    return this.http.get<T>(`${this.apiUrl}${entity}`).pipe(
      catchError((err) => this.handleError(err)),
      tap((entities) => this.loadEntities(entity, entities))
    );
  }

  post<T>(value: T): Observable<unknown> {
    return this.http
      .post<unknown>(`${this.apiUrl}${Entity.Doctor}`, value)
      .pipe(
        tap(() => this.showSuccessMessage()),
        catchError((err) => this.handleError(err))
      );
  }

  put<T>(value: T): Observable<unknown> {
    return this.http.put<unknown>(`${this.apiUrl}${Entity.Doctor}`, value).pipe(
      tap(() => this.showSuccessMessage()),
      catchError((err) => this.handleError(err))
    );
  }

  delete(id: number): Observable<unknown> {
    return this.http
      .delete<unknown>(`${this.apiUrl}${Entity.Doctor}/${id}`)
      .pipe(
        tap(() => this.showSuccessMessage()),
        catchError((err) => this.handleError(err))
      );
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
    this.toastrService.danger('Something went wrong', 'Server Error');
    // Return an observable with a user-facing error message.
    return of([]);
  }

  private showSuccessMessage(): void {
    this.toastrService.success('Operation completed', 'Success');
  }

  // STATE MANAGEMENT FOR ENTITIES
  loadEntities(entity: Entity, entities: any) {
    this.setState(
      () => ({
        [entity]: {
          entities: this.toEntities(entities),
          loading: true,
        },
      }),
      entity
    );
  }

  addEntity(entity: Entity, value: any) {
    this.setState(
      (state) => ({
        [state[entity]]: {
          entities: {
            ...state[entity].entities,
            [value.id]: value,
          },
        },
      }),
      entity
    );
  }

  removeEntity(entity: Entity, id: any['id']) {
    this.setState((state) => {
      const { [id]: removed, ...entities } = state[entity].entities;
      return { [state[entity]]: { entities } };
    }, entity);
  }

  getEntities$<T>(entity: Entity): Observable<T> {
    return this.state$.pipe(map((state) => state[entity]));
  }
}
