import { Component, EventEmitter, Output } from '@angular/core';
import { TodoStatus } from 'src/app/models/todo-item.model';

@Component({
  selector: 'app-todo-search',
  templateUrl: './todo-search.component.html',
  styleUrls: ['./todo-search.component.css']
})
export class TodoSearchComponent {
  searchQuery: string = '';
  filterStatus: TodoStatus | null = null;

  @Output() searchEvent = new EventEmitter<string>();
  @Output() filterEvent = new EventEmitter<TodoStatus | null>();

  search(): void {
    this.searchEvent.emit(this.searchQuery);
  }

  filter(): void {
    this.filterEvent.emit(this.filterStatus);
  }
}
