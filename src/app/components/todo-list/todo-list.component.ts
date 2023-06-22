import { Component } from '@angular/core';
import { map } from 'rxjs';
import { TodoItem, TodoStatus} from 'src/app/models/todo-item.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todoItems: TodoItem[] = [];
  filteredItems: TodoItem[] = []
  filterStatus: boolean = false;
  statusFilter: TodoStatus | null = null;
  searchQuery: string = '';


  constructor(private todoService: TodoService){}

  ngOnInit():void {
    this.fetchTodoItems();
  }

  fetchTodoItems(): void {
    this.todoItems = this.todoService.getTodoItems();
    this.filteredItems = this.todoItems;
  }

  searchItems(query: string): void {
    this.filteredItems = this.todoItems.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));
  }

  filterItems(status: TodoStatus | null): void {
    this.statusFilter = status;
    if (status) {
      this.filteredItems = this.todoItems.filter(item => item.status === status);
    } else {
      this.filteredItems = this.todoItems;
    }
  }  

  addTodoItem(newItem: TodoItem): void {
    if (!newItem.status) {
      newItem.status = TodoStatus.Normal;
    }
    this.todoService.addTodoItems(newItem);
    this.fetchTodoItems();
  }

}
