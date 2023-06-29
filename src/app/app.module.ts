import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { DayComponent } from './Components/day/day.component';
import { TaskComponent } from './Components/task/task.component';
import { DatePickerComponent } from "./Components/date-picker/date-picker.component";
import { TaskModalComponent } from './Components/task-modal/task-modal.component';

@NgModule({
  declarations: [AppComponent, DayComponent, TaskComponent, DatePickerComponent, TaskModalComponent],
  imports: [BrowserModule, FormsModule, CommonModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
