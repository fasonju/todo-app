import {Component, Input} from '@angular/core';
import {InsertTask, Task} from 'src/app/Models/Task';
import {TasksService} from 'src/app/tasks.service';

@Component({
    selector: 'app-day',
    templateUrl: './day.component.html',
    styleUrls: ['./day.component.css']
})
export class DayComponent {
    constructor(private tasksService: TasksService) {
    }

    date: string = new Date().toISOString().slice(0, 10);
    tasks: Task[] = [];
    creationModalActive = false;

    ngOnInit(): void {
        this.tasksService.getTasksForDay(this.date).then(tasks => {
            this.tasks = tasks;
        })
            .catch(err => {
                alert(err);
            });
    }

    openCreationModal(): void {
        this.creationModalActive = true;
    }

    closeCreationModal(): void {
        this.creationModalActive = false;
    }

    /**
     *
     * @param insert_task the values are not checked yet this is done on the back end
     */
    saveTask(insert_task: InsertTask): void {
        this.tasksService.saveTask(insert_task).then((task) => {
            if (task.dueDate == this.date) {
                this.tasks.push(task);
            }
        })
            .catch(err => {
                alert(err);
            });
    }

    /**
     * This function updates the tasks array to the tasks for the given date.
     *
     * @param date the date to change to
     */
    onDateChange(date: string): void {
        this.date = date;
        this.tasksService.getTasksForDay(this.date).then(tasks => {
            this.tasks = tasks;
        });
    }

    editTask(task: Task): void {
        //TODO spawn modal for changes to task
    }

    applyTaskChanges(task: Task): void {
        // send message to backend to update task
    }
}
