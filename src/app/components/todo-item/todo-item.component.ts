import { Component, Input } from '@angular/core';
import { TodoItem, TodoStatus } from 'src/app/models/todo-item.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todoItem!: TodoItem;
  todoStatus = TodoStatus;
}
