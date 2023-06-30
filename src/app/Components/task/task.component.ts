import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/Models/Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task!: Task;
  @Output() onEditTask = new EventEmitter<void>();

  editTask(): void {
    this.onEditTask.emit();
  }
}
