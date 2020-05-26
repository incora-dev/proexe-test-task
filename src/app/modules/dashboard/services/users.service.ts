import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IUser } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  API_URL = 'https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data';

  constructor(
    private http: HttpClient
  ) { }

  getUsersList(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.API_URL);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/${id}`);
  }

  createUser(newUser: Partial<IUser>): Observable<any> {
    return this.http.post<any>(this.API_URL, { data: newUser });
  }
}
