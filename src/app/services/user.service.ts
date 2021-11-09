import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlUsers: string = environment.userApi;


  constructor(private http: HttpClient) { }

  // Metodo get para todos los usuarios del Api
  getUsers() {
    return this.http.get(this.urlUsers);
  }

  // Metodo get para traer Usuario por ID
  getUser(id: number) {
    const url = `${this.urlUsers}/${id}`
    return this.http.get<any>(url);
  }

}
