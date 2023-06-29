import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InsertTask } from 'src/app/Models/Task';

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.css']
})
export class TaskModalComponent {

  taskForm : FormGroup = new FormGroup({
    name : new FormControl(''),
    dueDate : new FormControl(''),
    text : new FormControl('')
  });

  updateDueDate(date : string) {
    this.taskForm.patchValue({
      dueDate : date
    })
  }

  @Output() createTask : EventEmitter<InsertTask> = new EventEmitter();

  onsubmit() {
    let newTask : InsertTask  = {
      name: this.taskForm.value.name,
      dueDate: this.taskForm.value.dueDate,
      completed: false,
      text: this.taskForm.value.text
    }

    this.createTask.emit(newTask);
  }
}
