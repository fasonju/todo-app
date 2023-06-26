use chrono::naive::NaiveDate;

pub struct Task {
    name: string,
    due_date: NaiveDate,
    completed: bool,
    text: string,
}
