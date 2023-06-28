import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { AppComponent } from "./app.component";
import { DayComponent } from './Components/day/day.component';
import { TaskComponent } from './Components/task/task.component';
import { DatePickerComponent } from "./Components/date-picker/date-picker.component";

@NgModule({
  declarations: [AppComponent, DayComponent, TaskComponent, DatePickerComponent],
  imports: [BrowserModule, FormsModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
