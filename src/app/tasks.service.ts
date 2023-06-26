import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { InsertTask, Task } from './Models/Task';
import { invoke } from '@tauri-apps/api';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  /**
   * 
   * @param day day in iso string format
   */
  getTasksForDay(date : string) : Observable<Task[]> {
    return from(invoke<Task[]>('get_tasks_for_day', {isoDate: date}));
  }


  saveTask(task : InsertTask) : Observable<Task> {
    return from(invoke<Task>('save_task', {task: task}));
  }

  constructor() { }
}
