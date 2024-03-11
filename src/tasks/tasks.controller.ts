import { Body, Param,Controller,Get, Post , Delete, Patch} from '@nestjs/common';
import {TasksService} from './tasks.service';
import {UpdateTaskDto, createTaskDto} from './dto/task.dto'

@Controller('tasks')
export class TasksController {

    constructor(private taskService:TasksService){}

    @Get()
    getAllTask() {
        return this.taskService.getAllTask();
    }

    @Get(':id')
    getTask(@Param('id') id:string ) {
        return this.taskService.getTaskById(id);
    }

    @Post()
    createTask(@Body() newTask : createTaskDto){
        console.log('Titulo: ' + newTask.title);
        console.log('Description: ' + newTask.description);
        
        return this.taskService.createTask(newTask.title,newTask.description);
                //this.taskService.createTask()
    }

    @Delete(':id')
    deleteTask(@Param('id') id:string ){
        this.taskService.deleteTask(id)
    }

    @Patch(":id")
    updateTask(@Param("id") id : string, @Body()
    updatedFields : UpdateTaskDto ){
       return this.taskService.updateTask(id,updatedFields)
    }
}
