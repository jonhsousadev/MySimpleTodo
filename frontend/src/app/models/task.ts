export interface Task {
    id: number;
    description: string;
    owner: string;
    email: string;
    changes: number;
    done: boolean;
}