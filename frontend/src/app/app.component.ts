import { Component, OnInit } from '@angular/core';
import { TaskService } from './services/task.service';
import { Task } from './models/task';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  task = {} as Task;
  tasksDone: Task[];
  tasksUndone: Task[];
  title: String = 'test';
  newTaskValue: boolean;

  constructor(private taskService: TaskService) {
      this.tasksDone = [];
      this.tasksUndone = [];
      this.newTaskValue = false;
  }

  ngOnInit() {
    this.getTasks();
  }

  // defini se um taskro será criado ou atualizado
  saveTask(form: NgForm) {
    if (this.task.id !== undefined) {
      this.taskService.updateTask(this.task).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.taskService.saveTask(this.task).subscribe(() => {
        this.cleanForm(form);
      });
    }
    this.newTaskValue = false;
  }

  // Chama o serviço para obtém todos os taskros
  getTasks() {
    this.taskService.getTasks().
    subscribe((tasks: Task[]) => {
      this.tasksUndone = tasks.filter(task => !task.done)
      this.tasksDone = tasks.filter(task => task.done)
    });
  }

  // deleta um taskro
  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => {
      this.getTasks();
    });
  }

  // copia o taskro para ser editado.
  editTask(task: Task) {
   this.newTaskValue = true;
   this.task = { ...task };
  }

  newTask() {
     this.newTaskValue = true;
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getTasks();
    form.resetForm();
    this.task = {} as Task;
    this.newTaskValue = false;
  }

}