import { Injectable } from '@nestjs/common';
import {Task, TaskStatus} from './task.entity';
import {v4} from 'uuid';
import { UpdateTaskDto } from './dto/task.dto';
 
@Injectable()
export class TasksService {

    private tasks : Task[] = [{id:'1',
        title: 'example title',
        description :'this is example task',
        status: TaskStatus.PENDING},];

    getAllTask(){
        return this.tasks;
    }
    createTask(title: string, description: string){
        const task ={
            id : v4(),
            title :title,
            description :description,
            status: TaskStatus.PENDING
        };
        this.tasks.push(task);

        return task;
    }

    deleteTask(id:string ){
       this.tasks = this.tasks.filter(task => task.id !== id )
    }

    getTaskById(id:string) :Task{
        return this.tasks.find(task => task.id === id)
    }

    updateTask(id: string, updateFields: UpdateTaskDto ):Task {
        const task = this.getTaskById(id);
        const newTask = Object.assign(task, updateFields);
        this.tasks = this.tasks.map((task) => (task.id === id? newTask:task));
        return newTask;
    }
}
