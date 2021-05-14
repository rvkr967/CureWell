import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDoctor } from '../curewell-interfaces/IDoctor';

@Injectable({
  providedIn: 'root'
})
export class CureWellService {

  constructor(private http: HttpClient) { }
  getDoctors(): Observable<IDoctor[]> {
    return this.http.get < IDoctor[]>('')
  }
}
