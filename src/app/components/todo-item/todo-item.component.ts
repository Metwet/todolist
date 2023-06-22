import { Component, Input } from '@angular/core';
import { TodoItem, TodoStatus } from 'src/app/models/todo-item.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  constructor (private todoService: TodoService) {}
  @Input() todoItem!: TodoItem;
  todoStatus = TodoStatus;

  deleteTodoItem(): void {
    this.todoService.deleteTodoItems(this.todoItem);
  }
}
