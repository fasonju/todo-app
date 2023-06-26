import { Component, Input } from '@angular/core';
import { InsertTask, Task } from 'src/app/Models/Task';
import { TasksService } from 'src/app/tasks.service';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent {
  constructor(private tasksService : TasksService) { }
  @Input() day: string = new Date().toISOString().slice(0, 10);
  tasks: Task[] = [];

  ngOnInit(): void {
    this.tasksService.getTasksForDay(this.day).then(tasks => {
      this.tasks = tasks;
    })
    .catch(err => {
      alert(err);
    });
  }

  saveTask(task: Task): void {
    this.tasksService.saveTask(task).then(() => {
      this.tasks.push(task);
    })
    .catch(err => {
      alert(err);
    });
  }

  addTask(): void {
    
  }
}
