create table tasks
(
    id        INTEGER default 1 not null
        primary key autoincrement,
    name      TEXT              not null,
    dueDate   TEXT              not null,
    completed BOOLEAN           not null,
    text      TEXT              not null
);
