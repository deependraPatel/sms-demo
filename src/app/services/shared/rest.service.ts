import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, retry } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  //constructor
  constructor(private http: HttpClient) { }

  /*
   * public apis
   *
   * user login - login
   * logout
   */ 
  //login
  login(email: string, password: string) {
    let authData = {
      user: {
        email: email, password: password
      }
    };

    return this.http.post<any>(`${environment.apiUrl}/users/login`, authData)
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.user && user.user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          sessionStorage.setItem('currentUser', JSON.stringify(user));
        }

        return user;
      }));
  };

  //logout
  logout() {
    // remove user from local storage to log user out
    sessionStorage.removeItem('currentUser');
  }

  /*
   * portal module apis
   *
   * get all contacts - getContacts
   * 
   */ 

   //get all contacts
   getContacts(dataTablesParameters){
    return this.http.post<DataTablesResponse>(`${environment.apiUrl}/contacts`, dataTablesParameters)
    .pipe(
      retry(1)
    );
   }
}

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}