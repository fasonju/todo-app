use crate::db::establish_connection;
use crate::diesel;
use crate::diesel::{ExpressionMethods, QueryDsl, RunQueryDsl};
use crate::schema::tasks;
use crate::models::result::{TauriError, TauriResult};
use crate::models::task::{InsertTask, Task};

/// * `iso_date` - The date to get tasks for in ISO format YYYY-MM-DD
pub fn get_tasks_for_day(iso_date: String) -> TauriResult<Vec<Task>> {
    let conn = &mut establish_connection();
    if iso_date.len() != 10 {
        return Err(TauriError::InvalidParameterError);
    }
    
    todo!("Implement get_tasks_for_day")
}

/// * `task` - The task to save
/// # Returns The saved task with the id set
#[tauri::command]
pub fn save_task(task: InsertTask) -> TauriResult<Task> {
    let conn = &mut establish_connection();

    diesel::insert_into(tasks::table)
        .values(&task)
        .execute(conn)
        .map_err(TauriError::from)?;

    Ok(tasks::table.order(tasks::id.desc()).first(conn)?)
}
