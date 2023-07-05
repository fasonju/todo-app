import {Component, OnInit} from '@angular/core';
import {Task} from 'src/app/Models/Task';
import {TasksService} from 'src/app/tasks.service';

@Component({
    selector: 'app-day',
    templateUrl: './day.component.html',
    styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {
    date: string = new Date().toISOString().slice(0, 10);
    tasks: Task[] = [];
    creationModalActive = false;
    //this defines the task that the modal will edit
    taskToEdit?: Task = undefined;

    constructor(private tasksService: TasksService) {
    }

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

    openEditModal(task: Task): void {
        this.taskToEdit = task;
        console.log(this.taskToEdit);
    }

    closeEditModal(): void {
        this.taskToEdit = undefined;
    }

    /**
     *
     * @param task The new task created check if it should be added to tasks
     */
    newTask(task: Task): void {
        if (task.dueDate == this.date) {
            this.tasks.push(task);
        }
    }

    /**
     *
     * @param editedTask task is edited inside the modal
     * and gets passed from the child to check if it should be removed from tasks
     */
    editTask(editedTask: Task): void {
        //the position of the changed task in tasks
        let index = this.findTaskIndex(editedTask);
        if (index == -1) {
            alert("error: edited task not found.")
            return;
        }
        this.tasks[index] = editedTask;

        if (editedTask.dueDate != this.date) {
            this.tasks = this.tasks.filter((t) => t.id != editedTask.id);
        }
    }

    /**
     * Delete the task out of the tasks array
     * @param deletedTask The task to be deleted.
     */
    deleteTask(deletedTask: Task) {
        let originalLength = this.tasks.length;
        this.tasks.filter((t) => t.id != deletedTask.id)
        if (this.tasks.length == originalLength) {
            alert("error: no deletion occurred on front end.")
        }
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

    /**
     *
     * @param task the task to find
     * @private helper function not used outside of this component.
     * @return Returns the index and -1 if it does not exist.
     */
    private findTaskIndex(task: Task) {
        return this.tasks.findIndex((t) => t.id == task.id);
    }
}
