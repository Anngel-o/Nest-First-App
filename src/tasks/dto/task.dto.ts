import { TaskStatus } from "../task.entity";
import {IsString, IsNotEmpty, MinLength, IsOptional, IsIn} from 'class-validator';

export class CreateTaskDto {
    @IsString()
    @IsNotEmpty() 
    @MinLength(5) 
    title: string;

    @IsString()
    description: string;
}

export class UpdateTaskDto {
    //? opcional
    @IsString()
    @IsOptional()
    title?: string;
    @IsString()
    @IsOptional()
    description?: string;
    @IsString()
    @IsOptional()
    @IsIn([TaskStatus.PENDIND, TaskStatus.IN_PROGRESS, TaskStatus.DONE])
    status?: TaskStatus;
}