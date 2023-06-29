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
  modalActive = false;

  ngOnInit(): void {
    this.tasksService.getTasksForDay(this.date).then(tasks => {
      this.tasks = tasks;
    })
    .catch(err => {
      alert(err);
    });
  }

  /**
   * 
   * @param insert_task the values are not checked yet this is done on the back end
   */
  saveTask(insert_task: InsertTask): void {
    this.tasksService.saveTask(insert_task).then((task) => {
      this.tasks.push(task);
    })
    .catch(err => {
      alert(err);
    });
    this.modalActive = false;
  }

  onDateChange(date: string): void {
    this.date = date;
    this.tasksService.getTasksForDay(this.date).then(tasks => {
      this.tasks = tasks;
    });
  }
}
