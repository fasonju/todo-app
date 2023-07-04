use crate::diesel::{Insertable, Queryable};
use crate::schema::tasks;
use diesel::{AsChangeset, Identifiable};
/// Sqlite cannot store dates so we store as iso string
use serde::{Deserialize, Serialize};

#[derive(Queryable, Serialize, Deserialize, AsChangeset, Identifiable)]
#[allow(non_snake_case)]
pub struct Task {
    pub id: i32,
    name: String,
    dueDate: String,
    completed: bool,
    text: String,
}

#[derive(Insertable, Serialize, Deserialize)]
#[diesel(table_name = tasks)]
#[allow(non_snake_case)]
pub struct InsertTask {
    name: String,
    pub dueDate: String,
    completed: bool,
    text: String,
}
