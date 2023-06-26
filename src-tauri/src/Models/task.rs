use chrono::naive::NaiveDate;

pub struct Task {
    id: i32,
    name: string,
    due_date: NaiveDate,
    completed: bool,
    text: string,
}
