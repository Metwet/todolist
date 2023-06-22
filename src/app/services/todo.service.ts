import { Injectable } from '@angular/core';
import { TodoItem, TodoStatus } from '../models/todo-item.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) {
    this.getItemsFromJSON().subscribe((data)=>{
      data.forEach((item)=>{
        this.addTodoItems(item);
     })
      
   })
  }

  private todoItems: TodoItem[]=[];


  getItemsFromJSON(): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>(`${environment.todoItemsJSON}`);
  }

  getTodoItems(): TodoItem[] {
    return this.todoItems;
  }

  addTodoItems(item: TodoItem): void {
    if (this.todoItems.length > 0){
      const maxId = Math.max(...this.todoItems.map(item => item.id));
      item.id = maxId + 1;
    } else {
      item.id = 1;
    }
    this.todoItems.unshift(item);
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
