import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [TasksModule],//agregar funcionalidades extras como conexión a DB
  controllers: [AppController],//rutas del modulo, por ejemplo rutas get, post...
  providers: [AppService],//funciones reutilizables en otras partes
})
export class AppModule {}
