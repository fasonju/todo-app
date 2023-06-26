use crate::db::establish_connection;
use crate::diesel;
use crate::diesel::{ExpressionMethods, QueryDsl, QueryResult, RunQueryDsl};
use crate::schema::tasks;
use crate::Models::task::{InsertTask, Task};
/// * `iso_date` - The date to get tasks for in ISO format YYYY-MM-DDTHH:MM:SSZ
pub fn get_tasks_for_day(iso_date: String) -> Result<Vec<Task>, ()> {
    let conn = establish_connection();
    todo!("Implement get_tasks_for_day")
}

/// * `task` - The task to save
/// # Returns The saved task with the id set
#[tauri::command]
pub fn save_task(task: InsertTask) -> QueryResult<Task> {
    let conn = &mut establish_connection();

    diesel::insert_into(tasks::table)
        .values(&task)
        .execute(conn)?;

    Ok(tasks::table.order(tasks::id.desc()).first(conn)?)
}
