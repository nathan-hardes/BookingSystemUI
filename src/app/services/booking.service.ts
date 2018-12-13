import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { Booking } from '../models/booking';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getBookings(): Observable<Booking[]> { // TODO: Move to configuration
    return this.http.get<Booking[]>('http://localhost:50554/api/v1/bookings').pipe(
      catchError(this.handleError([]))
    );
  }

  makeBooking(booking: Booking): Observable<Booking> { // TODO: Move to configuration
    return this.http.post<Booking>('http://localhost:50554/api/v1/bookings', booking, httpOptions).pipe(
      catchError(this.handleError<Booking>())
    );
  }

  private handleError<T> (result?: T) {
    return (error: any): Observable<T> => {
   
      this.messageService.add(error.error + '(' +  error.message +')');
   
      return of(result as T);
    };
  }
}
