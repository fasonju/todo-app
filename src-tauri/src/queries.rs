use crate::db::establish_connection;
use crate::diesel;
use crate::diesel::{QueryResult, RunQueryDsl};
use crate::schema::tasks;
use crate::Models::task::{Task, TaskInsert};
/// * `iso_date` - The date to get tasks for in ISO format YYYY-MM-DDTHH:MM:SSZ
pub fn get_tasks_for_day(iso_date: String) -> Result<Vec<Task>, ()> {
    let conn = establish_connection();
    todo!("Implement get_tasks_for_day")
}

#[tauri::command]
pub fn save_task(task: TaskInsert) -> QueryResult<usize> {
    let conn = &mut establish_connection();

    diesel::insert_into(tasks::table)
        .values(&task)
        .execute(conn)
}
