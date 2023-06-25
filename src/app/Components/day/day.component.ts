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


  @Input() day: Date = new Date();
  tasks: Task[] = [];
}
