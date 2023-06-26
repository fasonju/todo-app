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

  testQuery() {
    let insertTask = {
      name: "test",
      dueDate: "2021-01-01",
      completed: false,
      text: "test"
    };
    this.tasksService.saveTask(insertTask).subscribe(task => {
      console.log(task);
      this.tasks.push(task)
    });
  }
}
