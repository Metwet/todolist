import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AboutComponent } from './modules/about/about.component';

const routes: Routes = [
  { path: `login`, component: LoginComponent},
  { path: `todolist`, component: TodoListComponent},
  { path: `about`, component: AboutComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
