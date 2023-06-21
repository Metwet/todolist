import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = `${environment.backendOrigin}/auth`;
  private currentUser: User | null = null;

  constructor(private http: HttpClient, private routes: Router) {}

  login(email: string, password: string){
    return this.http
      .post<{ token: string}>(`${this.baseUrl}/login`, { email, password })
      .pipe(
        map ((res)=>{
          if(res.token) {  
            console.log(res.token);
                      
            localStorage.setItem('del_meetups_auth_token', res.token)
          }
          return null;
        })
      )
  }

  logout() {
    localStorage.removeItem('del_meetups_auth_token');
    this.routes.navigate(['login']);
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }

  getUser() {
    return this.http.get<User>(`${this.baseUrl}/user`);
  }
}
