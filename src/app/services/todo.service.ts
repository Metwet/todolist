import { Injectable } from '@angular/core';
import { TodoItem, TodoStatus } from '../models/todo-item.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) {}

  private todoItems: TodoItem[]=[];


  getItemsFromJSON(): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>(`${environment.todoItemsJSON}`);
  }

  getTodoItems(): TodoItem[] {
    return this.todoItems;
  }

  addTodoItems(item: TodoItem): void {
    this.todoItems.unshift(item);
    console.log(this.todoItems);
    
  }

  deleteTodoItems(item: TodoItem): void {
    const index = this.todoItems.indexOf(item);
    if(index > -1) {
      this.todoItems.splice(index, 1);
    }
  }

  updateTodoItemStatus(item: TodoItem, newStatus: TodoStatus): void{
    item.status = newStatus;
  }
}
