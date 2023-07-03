import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Task} from 'src/app/Models/Task';

@Component({
    selector: 'app-task-edit-modal',
    templateUrl: './task-edit-modal.component.html',
    styleUrls: ['./task-edit-modal.component.css']
})
export class TaskEditModalComponent {
    @Input() task!: Task;
    @Output() editTask: EventEmitter<Task> = new EventEmitter();
    @Output() closeModal: EventEmitter<void> = new EventEmitter();


    taskForm: FormGroup = new FormGroup({
        name: new FormControl(this.task.name),
        dueDate: new FormControl(this.task.dueDate),
        complete: new FormControl(this.task.completed),
        text: new FormControl(this.task.text)
    });

    onUpdateTask() {
        let updatedTask: Task = {
            id: this.task.id,
            name: this.taskForm.value.name,
            dueDate: this.taskForm.value.dueDate,
            completed: this.taskForm.value.complete,
            text: this.taskForm.value.text
        }

        this.editTask.emit(updatedTask);
        this.closeModal.emit();
    }

    oncloseModal() {
        this.closeModal.emit();
    }
}
