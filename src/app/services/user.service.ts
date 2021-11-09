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

  getUsers() {
    return this.http.get(this.urlUsers);
  }

  getUser(id: number) {
    const url = `${this.urlUsers}/${id}`
    return this.http.get<any>(url);
  }

}
