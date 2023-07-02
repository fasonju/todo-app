import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InsertTask } from 'src/app/Models/Task';

@Component({
  selector: 'app-task-creation-modal',
  templateUrl: './task-creation-modal.component.html',
  styleUrls: ['./task-creation-modal.component.css']
})
export class TaskCreationModalComponent {

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

  @Output() oncreateTask : EventEmitter<InsertTask> = new EventEmitter();
  @Output() oncancelCreation : EventEmitter<void> = new EventEmitter();

  createTask() {
    let newTask : InsertTask  = {
      name: this.taskForm.value.name,
      dueDate: this.taskForm.value.dueDate,
      completed: false,
      text: this.taskForm.value.text
    }

    this.oncreateTask.emit(newTask);
    this.taskForm.reset();
  }

  cancelCreation() {
    this.oncancelCreation.emit();
  }
}
