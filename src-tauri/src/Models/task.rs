/// SQLITE cannot store dates so we store as iso string
use crate::diesel::{Insertable, Queryable};
use crate::schema::tasks;

#[derive(Queryable)]
pub struct Task {
    id: i32,
    name: String,
    due_date: String,
    completed: bool,
    text: String,
}
#[derive(Insertable)]
#[table_name = "tasks"]
pub struct TaskInsert {
    name: String,
    dueDate: String,
    completed: bool,
    text: String,
}
