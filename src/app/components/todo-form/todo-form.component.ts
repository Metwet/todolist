import { Component, EventEmitter, Output } from '@angular/core';
import { TodoItem, TodoStatus } from 'src/app/models/todo-item.model';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  newTodoItem: TodoItem = new TodoItem(0, '', '', TodoStatus.Normal);

  @Output() addTodoItemEvent = new EventEmitter<TodoItem>();

  addTodoItem(): void {
    this.addTodoItemEvent.emit(this.newTodoItem);
    this.newTodoItem = new TodoItem(0, '', '', TodoStatus.Normal)
  }
}
