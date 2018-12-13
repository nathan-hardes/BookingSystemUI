import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Space } from '../models/space';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SpaceService {

  constructor(
    private http: HttpClient
  ) { }

  getSpaces(): Observable<Space[]> { // TODO: Move to configuration
    return this.http.get<Space[]>('http://localhost:50554/api/v1/spaces');
  }
}
