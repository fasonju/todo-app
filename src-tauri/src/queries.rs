use crate::db::establish_connection;
use crate::diesel;
use crate::diesel::{ExpressionMethods, QueryDsl, RunQueryDsl};
use crate::models::result::{TauriError, TauriResult};
use crate::models::task::{InsertTask, Task};
use crate::schema::tasks;

/// * `iso_date` - The date to get tasks for in ISO format YYYY-MM-DD
#[tauri::command]
#[allow(non_snake_case)]
pub fn get_tasks_for_day(isoDate: String) -> TauriResult<Vec<Task>> {
    let conn = &mut establish_connection();

    validate_date(isoDate.clone())?;

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

    validate_date(task.dueDate.clone())?;

    diesel::insert_into(tasks::table)
        .values(&task)
        .execute(conn)
        .map_err(TauriError::from)?;

    tasks::table
        .order(tasks::id.desc())
        .first(conn)
        .map_err(TauriError::from)
}

#[tauri::command]
#[allow(non_snake_case)]
pub fn edit_task(task: Task) -> TauriResult<Task> {
    let conn = &mut establish_connection();
    validate_date(task.dueDate.clone())?;

    diesel::update(tasks::table.filter(tasks::id.eq(task.id)))
        .set(&task)
        .execute(conn)
        .map_err(TauriError::from)?;

    Ok(task)
}

#[tauri::command]
#[allow(non_snake_case)]
pub fn delete_task(task: Task) -> TauriResult<Task> {
    let conn = &mut establish_connection();

    diesel::delete(tasks::table.filter(tasks::id.eq(task.id)))
        .execute(conn)
        .map_err(TauriError::from)?;
    Ok(task)
}

/// returns Err if the date is invalid
fn validate_date(date: String) -> TauriResult<()> {
    if chrono::NaiveDate::parse_from_str(date.as_str(), "%Y-%m-%d").is_err() {
        return Err(TauriError::InvalidParameterError {
            expected: ("YYYY-MM-DD"),
            got: (date),
        });
    }

    Ok(())
}
