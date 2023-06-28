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
  date: string = new Date().toISOString().slice(0, 10);
  tasks: Task[] = [];

  ngOnInit(): void {
    this.tasksService.getTasksForDay(this.date).then(tasks => {
      this.tasks = tasks;
    })
    .catch(err => {
      alert(err);
    });
  }

  saveTask(insert_task: InsertTask): void {
    this.tasksService.saveTask(insert_task).then((task) => {
      this.tasks.push(task);
    })
    .catch(err => {
      alert(err);
    });
  }

  onDateChange(date: string): void {
    this.date = date;
  }
}
