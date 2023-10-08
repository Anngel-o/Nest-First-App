import { Body, Controller, Delete, Get, Param, Post, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';

//cuando se solicite la ruta .../tasks desde el front
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}
  //cuando se hace una petición get
  @Get()
  getTasks() {
    return this.tasksService.getTasks();
  }

  @Post()
  createTask(@Body() newTask: CreateTaskDto) {
    return this.tasksService.createTask(newTask.title, newTask.description);
    // console.log(newTask);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    this.tasksService.deleteTask(id);
  }

  @Patch(":id")
  updateTask(@Param('id') id: string, @Body() updatedFields: UpdateTaskDto) {
    return this.tasksService.updateTask(id, updatedFields);
  }
}
