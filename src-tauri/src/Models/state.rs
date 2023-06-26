pub struct State {
    pub database: std::sync::Mutex<Option<rusqlite::Connection>>,
}
