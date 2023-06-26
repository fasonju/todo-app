// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

#[macro_use]
extern crate diesel;

mod db;
mod queries;
mod models {
    pub mod result;
    pub mod task;
}
mod schema;

use queries::*;

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![save_task])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
