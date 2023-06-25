import { Component, Input } from '@angular/core';
import { Task } from 'src/app/Models/Task';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent {

  @Input() day: Date = new Date();
  tasks: Task[] = [];
}
