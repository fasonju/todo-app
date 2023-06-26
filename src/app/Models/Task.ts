/// Sqlite cannot store dates so we use a string for dueDate and convert it to a date when we need it
export type Task = {
    id: number;
    name: string;
    dueDate: string;
    completed: boolean;
    text: string;
}

export type InsertTask = {
    name: string;
    dueDate: string;
    completed: boolean;
    text: string;
}