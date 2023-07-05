import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Task} from 'src/app/Models/Task';
import {TasksService} from "../../tasks.service";

@Component({
    selector: 'app-task-edit-modal',
    templateUrl: './task-edit-modal.component.html',
    styleUrls: ['./task-edit-modal.component.css']
})
export class TaskEditModalComponent implements OnChanges {
    @Input() task!: Task;
    @Output() editTask: EventEmitter<Task> = new EventEmitter();
    @Output() closeModal: EventEmitter<void> = new EventEmitter();
    @Output() deleteTask: EventEmitter<Task> = new EventEmitter()

    constructor(private tasksSerice : TasksService) {
    }

    taskForm: FormGroup = new FormGroup({
        name: new FormControl(''),
        dueDate: new FormControl(new Date().toISOString().slice(0, 10)),
        complete: new FormControl(''),
        text: new FormControl('')
    });

    ngOnChanges(changes: SimpleChanges) {
        if (changes['task']) {
            this.taskForm.patchValue({
                name: this.task.name,
                dueDate: this.task.dueDate,
                complete: this.task.completed,
                text: this.task.text
            });
        }
    }

    onUpdateTask() {
        let updatedTask: Task = {
            id: this.task.id,
            name: this.taskForm.value.name,
            dueDate: this.taskForm.value.dueDate,
            completed: this.taskForm.value.complete,
            text: this.taskForm.value.text
        }

        this.tasksSerice.editTask(updatedTask).then((task) => {
            this.editTask.emit(task);
        })
            .catch((err) => {
                alert(err);
            })

        this.closeModal.emit();
    }

    onDeleteTask() {
        this.tasksSerice.deleteTask(this.task).then((task) => {
            this.deleteTask.emit(this.task)
        })
            .catch((err) => {
                alert(err);
            });
        this.closeModal.emit()
    }

    updateDueDate(date: string) {
        this.taskForm.patchValue({
            dueDate: date
        })
    }

    onCloseModal() {
        this.closeModal.emit();
    }
}
