import { TaskStatus } from "../task.entity"
import {IsIn, IsNotEmpty, IsOptional, IsString, MinLength} from 'class-validator';

export class createTaskDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    title:string
    @IsString()
    @IsNotEmpty()
    description:string
}

export class UpdateTaskDto {
    @IsString()
    @IsOptional()
    title?: string;
    @IsString()
    @IsOptional()
    description?: string;
    @IsString()
    @IsOptional()
    @IsIn([TaskStatus.DONE, TaskStatus.PENDING,TaskStatus.IN_PROGRESS])
    status?: TaskStatus;
} 
