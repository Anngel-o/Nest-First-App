import {IsString} from 'class-validator';

export enum TaskStatus {
    PENDIND = 'PENDING',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE',
}

export class Task {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
}