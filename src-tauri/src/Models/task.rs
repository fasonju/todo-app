/// Sqlite cannot store dates so we store as iso string
use serde::{Deserialize, Serialize};
use crate::diesel::{Insertable, Queryable};
use crate::schema::tasks;

#[derive(Queryable, Serialize, Deserialize)]
#[allow(non_snake_case)]
pub struct Task {
    id: i32,
    name: String,
    dueDate: String,
    completed: bool,
    text: String,
}
#[derive(Insertable, Serialize, Deserialize)]
#[table_name = "tasks"]
#[allow(non_snake_case)]
pub struct InsertTask {
    name: String,
    dueDate: String,
    completed: bool,
    text: String,
}
