import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

import {AppComponent} from "./app.component";
import {DayComponent} from './Components/day/day.component';
import {TaskComponent} from './Components/task/task.component';
import {DatePickerComponent} from "./Components/date-picker/date-picker.component";
import {TaskCreationModalComponent} from './Components/task-creation-modal/task-creation-modal.component';
import {TaskEditModalComponent} from './Components/task-edit-modal/task-edit-modal.component';

@NgModule({
    declarations: [AppComponent, DayComponent, TaskComponent, DatePickerComponent, TaskCreationModalComponent, TaskEditModalComponent],
    imports: [BrowserModule, FormsModule, CommonModule, ReactiveFormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
