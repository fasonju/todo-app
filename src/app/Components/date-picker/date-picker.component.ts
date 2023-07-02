import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})

export class DatePickerComponent {
  MONTH_NAMES = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  MIDDAY = 12; //necessary because iso string conversion could fuck up the dates otherwise.
  showDatepicker = false;
  datepickerValue!: string;
  @Output() dateChangeEvent = new EventEmitter<string>();
  month!: number; // !: mean promis it will not be null, and it will definitely be assigned
  year!: number;
  no_of_days = [] as number[];
  blankdays = [] as number[];

  constructor() {
    this.initDate();
    this.getNoOfDays();
  }


  initDate() {
    let today = new Date();
    this.month = today.getMonth();
    this.year = today.getFullYear();
    this.datepickerValue = new Date(this.year, this.month, today.getDate(), this.MIDDAY).toDateString();
    this.dateChangeEvent.emit(today.toISOString().slice(0, 10));
  }

  isToday(date: any) {
    const today = new Date();
    const d = new Date(this.year, this.month, date);
    return today.toDateString() === d.toDateString() ? true : false;
  }

  getDateValue(date: any) {
    let selectedDate = new Date(this.year, this.month, date, this.MIDDAY); 
    console.log(selectedDate.toISOString());
    this.datepickerValue = selectedDate.toDateString();
    this.dateChangeEvent.emit(selectedDate.toISOString().slice(0, 10));
    this.showDatepicker = false;
  }

  /**
   * On change of either year or month, call this function to make the days line up.
   */
  getNoOfDays() {
    const daysInMonth = new Date(this.year, this.month + 1, 0).getDate();

    // find where to start calendar day of week
    let dayOfWeek = new Date(this.year, this.month).getDay();
    let blankdaysArray = [];
    for (let i = 1; i <= dayOfWeek; i++) {
      blankdaysArray.push(i);
    }

    let daysArray = [];
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push(i);
    }

    this.blankdays = blankdaysArray;
    this.no_of_days = daysArray;
  }

  modifyMonth(change : number) {
    //TODO implement dropdown month change
    if (Math.abs(change) != 1) {
      console.error("Invalid month change");
      return;
    }

    let newMonth = this.month + change;

    if (newMonth > 11) {
      this.year += 1;
      this.month = 0;
    } else if (newMonth < 0) {
      this.year -= 1;
      this.month = 11;
    } else {
      this.month = newMonth;
    }
  }

  modifyYear(change : number) {
    this.year += change;
    this.getNoOfDays();
  }

  trackByIdentity = (index: number, item: any) => item;
}
