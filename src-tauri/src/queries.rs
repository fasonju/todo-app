use crate::db::establish_connection;
use crate::diesel;
use crate::diesel::{ExpressionMethods, QueryDsl, RunQueryDsl};
use crate::models::result::{TauriError, TauriResult};
use crate::models::task::{InsertTask, Task};
use crate::schema::tasks;

/// * `iso_date` - The date to get tasks for in ISO format YYYY-MM-DD
#[tauri::command]
pub fn get_tasks_for_day(isoDate: String) -> TauriResult<Vec<Task>> {
    let conn = &mut establish_connection();
    if !valid_date(&isoDate) {
        return Err(TauriError::InvalidParameterError {
            expected: ("YYYY-MM-DD"),
            got: (isoDate),
        });
    }
    tasks::table
        .filter(tasks::dueDate.eq(isoDate))
        .load(conn)
        .map_err(TauriError::from)
}

/// * `task` - The task to save
/// # Returns The saved task with the id set
#[tauri::command]
pub fn save_task(task: InsertTask) -> TauriResult<Task> {
    let conn = &mut establish_connection();

    if !valid_date(&task.dueDate) {
        return Err(TauriError::InvalidParameterError {
            expected: ("YYYY-MM-DD"),
            got: (task.dueDate),
        });
    }

    diesel::insert_into(tasks::table)
        .values(&task)
        .execute(conn)
        .map_err(TauriError::from)?;

    tasks::table
        .order(tasks::id.desc())
        .first(conn)
        .map_err(TauriError::from)
}

fn valid_date(date: &str) -> bool {
    chrono::NaiveDate::parse_from_str(date, "%Y-%m-%d").is_ok()
}
