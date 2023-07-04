import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from 'src/app/Models/Task';
import {TasksService} from "../../tasks.service";

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
    @Input() task!: Task;
    @Output() openEditTaskModal = new EventEmitter<Task>();
    completed = false;

    constructor(private taskService: TasksService) {
    }

    ngOnInit() {
        this.completed = this.task.completed;
    }

    onEditTask(): void {
        this.openEditTaskModal.emit(this.task);
    }

    updateCompletionState() {
        this.task.completed = this.completed;
        this.taskService.editTask(this.task).then((updatedTask) => {
            this.task = updatedTask;
        })
            .catch((err) => {
                alert(err);
            });
    }
}
