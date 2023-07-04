import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from 'src/app/Models/Task';

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css']
})
export class TaskComponent {
    @Input() task!: Task;
    @Output() openEditTaskModal = new EventEmitter<Task>();

    onEditTask(): void {
        this.openEditTaskModal.emit(this.task);
    }
}
