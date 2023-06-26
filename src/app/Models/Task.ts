/// Sqlite cannot store dates so we use a string for dueDate and convert it to a date when we need it
export interface Task {
    id: number;
    name: string;
    dueDate: String;
    completed: boolean;
    text: string;
}