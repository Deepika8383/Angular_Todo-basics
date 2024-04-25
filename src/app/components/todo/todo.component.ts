
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  todoForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      inputTodo: ['', Validators.required],
      completed: [false],
      content: ['']
    });
  }

  addTodo() {
    if (this.todoForm.valid) {
      const todo = this.todoForm.value;
      this.todos.push({
        content: todo.inputTodo,
        completed: todo.completed,
        editMode: false
      });
      this.todoForm.reset();
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
    const todo = this.todos[index];
    if (todo.editMode) {

      todo.content = this.todoForm.value.content;
      console.log(this.todoForm.value.content);
      todo.editMode = false;
    } else {
      
      this.todoForm.patchValue({
        content: todo.content
      });
      console.log(this.todoForm.value.content);
      todo.editMode = true;
    }
  }
  
}

// import { Component } from '@angular/core';

// interface Todo {
//   content: string;
//   completed: boolean;
//   editMode: boolean;
// }

// @Component({
//   selector: 'app-todo',
//   templateUrl: './todo.component.html',
//   styleUrls: ['./todo.component.css']
// })
// export class TodoComponent {
//   todos: Todo[] = [];
//   inputTodo: string = '';

//   addTodo() {
//     if (this.inputTodo.trim()) {
//       this.todos.push({
//         content: this.inputTodo,
//         completed: false,
//         editMode: false
//       });
//       this.inputTodo = '';
//     } else {
//       alert('Please enter a task before adding!');
//     }
//   }

//   toggleDone(index: number) {
//     this.todos[index].completed = !this.todos[index].completed;
//   }

//   deleteTodo(index: number) {
//     this.todos.splice(index, 1);
//   }

//   toggleContent(index: number) {
//     this.todos[index].editMode = true;
//   }

//   toggleEditMode(index: number) {
//     if (this.todos[index].editMode) {
//       this.todos[index].editMode = false;
//     } else {
//       this.todos[index].editMode = true;
//     }
//   }
// }
