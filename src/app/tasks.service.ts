import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './Models/Task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  getTasksForDay(day: Date) : Observable<Task[]> {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
