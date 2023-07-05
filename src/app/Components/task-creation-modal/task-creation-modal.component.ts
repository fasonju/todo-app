import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {InsertTask, Task} from 'src/app/Models/Task';
import {TasksService} from "../../tasks.service";

@Component({
    selector: 'app-task-creation-modal',
    templateUrl: './task-creation-modal.component.html',
    styleUrls: ['./task-creation-modal.component.css']
})
export class TaskCreationModalComponent {
constructor(private tasksService : TasksService) {
}
    taskForm: FormGroup = new FormGroup({
        name: new FormControl(''),
        dueDate: new FormControl(new Date().toISOString().slice(0, 10)),
        text: new FormControl('')
    });
    @Output() createTask: EventEmitter<Task> = new EventEmitter();
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

        this.tasksService.saveTask(newTask).then((task) => {
            this.createTask.emit(task);
            this.closeModal.emit();
            this.taskForm.reset();
        })
            .catch( (err)=> {
            alert(err);
        });


    }

    onCloseModal() {
        this.closeModal.emit();
    }
}
