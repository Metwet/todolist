import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor (private authService: AuthService,  private routers: Router) {}

  @Output() public loginEvent = new EventEmitter();

  email!: string;
  password!: string;

  login(email: string, password: string): void {
    this.authService.login(email, password).subscribe(()=>{
       this.routers.navigate([`/todolist`])
      }
    );
  }
}
