import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { BehaviorSubject, of } from 'rxjs';
import { Observable } from 'rxjs-compat';
import { catchError, tap } from 'rxjs/operators';
import { Customer } from '../data/customer';
import { Doctor } from '../data/doctor';
import { Entity } from '../data/entity';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  private http = inject(HttpClient);

  private toastrService = inject(NbToastrService);

  private doctorsSource$ = new BehaviorSubject<Doctor[]>([])

  readonly doctors$ = this.doctorsSource$.asObservable();

  getCustomers() {
    return this.http.get<Customer[]>(`/api/${Entity.Customer}`).pipe(
      catchError((err) => this.handleError(err))
    );
  }

  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(`/api/${Entity.Doctor}`).pipe(
      catchError((err) => this.handleError(err)),
      tap((doctors) => this.updateDoctors(doctors)))
  }

  postDoctors(doctor: Doctor): Observable<unknown> {
    return this.http.post<unknown>(`/api/${Entity.Doctor}`, doctor).pipe(
      tap(() => this.showSuccessMessage()),
      catchError((err) => this.handleError(err)),
    )
  }

  putDoctors(doctor: Doctor): Observable<unknown> {
    return this.http.put<unknown>(`/api/${Entity.Doctor}`, doctor).pipe(
      tap(() => this.showSuccessMessage()),
      catchError((err) => this.handleError(err))
    )
  }

  delete(entity: Entity, id: number): Observable<unknown> {
    return this.http.delete<unknown>(`/api/${entity}/${id}`).pipe(
      tap(() => this.showSuccessMessage()),
      catchError((err) => this.handleError(err))
    )
  }

  updateDoctors(doctors: Doctor[]) {
    this.doctorsSource$.next(doctors);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    this.toastrService.danger('Something went wrong', 'Server Error');
    // Return an observable with a user-facing error message.
    return of([]);
  }

  private showSuccessMessage(): void {
    this.toastrService.success('Operation completed', 'Success')
  }
}
