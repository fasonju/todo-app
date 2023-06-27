import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { DayComponent } from './Components/day/day.component';
import { TaskComponent } from './Components/task/task.component';

@NgModule({
  declarations: [AppComponent, DayComponent, TaskComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
