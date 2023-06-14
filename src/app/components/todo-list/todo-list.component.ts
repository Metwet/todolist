import { Component } from '@angular/core';
import { TodoItem } from 'src/app/models/todo-item.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todoItems: TodoItem[] = [];

  constructor(private todoService: TodoService){}
}
