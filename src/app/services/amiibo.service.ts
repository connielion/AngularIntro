import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Amiibo } from '../interface/amiibo';


@Injectable({
  providedIn: 'root'
})
export class AmiiboService {

  private apiUrl = 'http://www.amiiboapi.com/api/';

  constructor(private http: HttpClient) { }
 /*
  myFunction() {
    console.log('AAAH');
  }
  */

  // Amiibo interface, type Array
 getAmiibos(): Observable<Amiibo[]> {
  return this.http.get<Amiibo[]>(`${this.apiUrl}amiibo`);
 }
 getAmiibo(tail: string): Observable<Amiibo> {
  console.log(tail);
 return this.http.get<Amiibo>(`${this.apiUrl}amiibo/?tail=${tail}`);
}

}
