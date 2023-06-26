-- Your SQL goes here
CREATE TABLE tasks (
    id INTEGER PRIMARY KEY Not NULL,
    name TEXT Not NULL,
    dueDate TEXT Not NULL,
    completed BOOLEAN Not NULL,
    text TEXT Not NULL
);
