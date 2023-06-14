import { Component } from '@angular/core';
import { TodoItem, TodoStatus} from 'src/app/models/todo-item.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todoItems: TodoItem[] = [];

  constructor(private todoService: TodoService){}

  fetchTodoItems(): void {
    this.todoItems = this.todoService.getTodoItems();
  }

  addTodoItem(newItem: TodoItem): void {
    this.todoService.addTodoItems(newItem);
    this.fetchTodoItems();
  }
}
