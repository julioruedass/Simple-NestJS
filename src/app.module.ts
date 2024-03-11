import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    username:'root',
    password:'Root_1234',
    database:'usuarios',
    host:'localhost',
    port:3306,
    entities:[__dirname + '/**/*.entity{.ts,.js}'],
    synchronize:true

}), UsuariosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
