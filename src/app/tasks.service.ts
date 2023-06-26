import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Task } from './Models/Task';
import { invoke } from '@tauri-apps/api';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  /**
   * 
   * @param day day is in full JS fromat we convert this to iso format
   */
  getTasksForDay(day: Date) : Observable<Task[]> {
    let iso_date : string = day.toISOString();
    return from(invoke<Task[]>('get_tasks_for_day', {day: iso_date}));
  }

  constructor() { }
}
