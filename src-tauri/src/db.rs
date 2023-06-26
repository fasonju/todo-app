use diesel::{Connection, SqliteConnection};

const DATABASE_URL: &str = "db.sqlite3";

pub fn establish_connection() -> SqliteConnection {
    Connection::establish(DATABASE_URL).unwrap_or_else(|_| panic!("Error connecting to db.sqlite3"))
}
