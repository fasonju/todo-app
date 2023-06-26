use rusqlite::{params, Connection, Result};

/// * `iso_date` - The date to get tasks for in ISO format YYYY-MM-DDTHH:MM:SSZ
pub async fn get_tasks_for_day(iso_date: String) -> Result<Vec<Task>, sqlx::Error> {
    println("Getting tasks for day: {}", iso_date);
}

pub async fn save_task_to_day() {
    
}
