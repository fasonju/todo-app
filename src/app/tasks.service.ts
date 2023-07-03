import {Injectable} from '@angular/core';
import {InsertTask, Task} from './Models/Task';
import {invoke} from '@tauri-apps/api';

@Injectable({
    providedIn: 'root'
})
export class TasksService {

    /**
     *
     * @param day day in iso string format
     */
    getTasksForDay(date: string): Promise<Task[]> {
        return invoke<Task[]>('get_tasks_for_day', {isoDate: date});
    }


    saveTask(task: InsertTask): Promise<Task> {
        return invoke<Task>('save_task', {task: task});
    }

    constructor() {
    }
}
