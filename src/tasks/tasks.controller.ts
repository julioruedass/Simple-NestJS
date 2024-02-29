import { Body,Controller,Get, Post } from '@nestjs/common';
import {TasksService} from './tasks.service';
import {createTaskDto} from './dto/task.dto'

@Controller('tasks')
export class TasksController {

    constructor(private taskService:TasksService){}

    @Get()
    getAllTask() {
        return this.taskService.getAllTask();
    }

    @Post()
    createTask(@Body() newTask : createTaskDto){
        console.log('Titulo: ' + newTask.title);
        console.log('Description: ' + newTask.description);
        
        return this.taskService.createTask(newTask.title,newTask.description);
                //this.taskService.createTask()
    }

}
