import { Component, Input } from '@angular/core';
import { Task } from 'src/app/Models/Task';
import { TasksService } from 'src/app/tasks.service';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent {

  constructor(private tasksService : TasksService) { }

  ngOnInit(): void {
    //this.tasksService.getTasksForDay(this.day).subscribe(tasks => this.tasks = tasks);
  }


  //@Input() day: string = new Date().toISOString().slice(0, 10);
  tasks: Task[] = [];

  testQueryInsert() {
    let insertTask = {
      name: "test",
      dueDate: "2021-01-01",
      completed: false,
      text: "test"
    };

    this.tasksService.saveTask(insertTask).then(task => {
      this.tasks.push(task);
    })
    .catch(err => {
      alert(err);
    });
  }

  testQueryGet() {
    this.tasksService.getTasksForDay("2021-01-01").then(tasks => {
      this.tasks = tasks;
    })
    .catch(err => {
      alert(err);
    });
  }
}
