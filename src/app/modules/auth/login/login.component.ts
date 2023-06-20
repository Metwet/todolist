import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @Output() public loginEvent = new EventEmitter();

  username!: string;
  password!: string;

  login(username: string, password: string): void {
    console.log(`${username} and ${password}`);
  }
}
