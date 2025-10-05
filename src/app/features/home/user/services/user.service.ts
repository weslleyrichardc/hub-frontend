import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { UserInterface } from "../interfaces/user.interface";
import { environment } from "../../../../../environments/environments";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.apiUrl + '/api';
  private http = inject(HttpClient);

  currentUser(): Observable<UserInterface> {
    return this.http.get<UserInterface>(
      this.apiUrl + '/user',
      {
        ...this.getOptions(),
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }
    );
  }

  private getOptions() {
    return {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    }
  }
}
