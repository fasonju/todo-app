import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {InsertTask} from 'src/app/Models/Task';

@Component({
    selector: 'app-task-creation-modal',
    templateUrl: './task-creation-modal.component.html',
    styleUrls: ['./task-creation-modal.component.css']
})
export class TaskCreationModalComponent {

    taskForm: FormGroup = new FormGroup({
        name: new FormControl(''),
        dueDate: new FormControl(new Date().toISOString().slice(0, 10)),
        text: new FormControl('')
    });
    @Output() createTask: EventEmitter<InsertTask> = new EventEmitter();
    @Output() closeModal: EventEmitter<void> = new EventEmitter();

    updateDueDate(date: string) {
        this.taskForm.patchValue({
            dueDate: date
        })
    }

    onCreateTask() {
        let newTask: InsertTask = {
            name: this.taskForm.value.name,
            dueDate: this.taskForm.value.dueDate,
            completed: false,
            text: this.taskForm.value.text
        }

        this.createTask.emit(newTask);
        this.closeModal.emit();
        this.taskForm.reset();
    }

    onCloseModal() {
        this.closeModal.emit();
    }
}
