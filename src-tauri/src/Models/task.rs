use serde::{Deserialize, Serialize};

/// SQLITE cannot store dates so we store as iso string
use crate::diesel::{Insertable, Queryable};
use crate::schema::tasks;

#[derive(Queryable, Serialize, Deserialize)]
pub struct Task {
    id: i32,
    name: String,
    due_date: String,
    completed: bool,
    text: String,
}
#[derive(Insertable, Serialize, Deserialize)]
#[table_name = "tasks"]
pub struct InsertTask {
    name: String,
    dueDate: String,
    completed: bool,
    text: String,
}
