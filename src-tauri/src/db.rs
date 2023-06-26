use diesel::{Connection, SqliteConnection};

pub fn establish_connection() -> SqliteConnection {
    Connection::establish("db.sqlite3").unwrap_or_else(|_| panic!("Error connecting to db.sqlite3"))
}
