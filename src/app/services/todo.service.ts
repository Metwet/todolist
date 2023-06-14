import { Injectable } from '@angular/core';
import { TodoItem, TodoStatus } from '../models/todo-item.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  private todoItems: TodoItem[]=[];

  getTodoItems(): TodoItem[] {
    return this.todoItems;
  }

  addTodoItems(item: TodoItem): void {
    console.log(item);
    console.log(this.todoItems)
    this.todoItems.push(item);
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
