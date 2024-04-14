import { Component } from '@angular/core';

interface Todo {
  content: string;
  completed: boolean;
  editMode: boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todos: Todo[] = [];
  inputTodo: string = '';

  addTodo() {
    if (this.inputTodo.trim()) {
      this.todos.push({
        content: this.inputTodo,
        completed: false,
        editMode: false
      });
      this.inputTodo = '';
    } else {
      alert('Please enter a task before adding!');
    }
  }

  toggleDone(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }

  toggleContent(index: number) {
    this.todos[index].editMode = true;
  }

  toggleEditMode(index: number) {
    if (this.todos[index].editMode) {
      this.todos[index].editMode = false;
    } else {
      this.todos[index].editMode = true;
    }
  }
}
