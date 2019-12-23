import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { BookEntity } from './book/book.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3307,
            username: 'root',
            password: 'root',
            database: 'demo_nest',
            entities: [BookEntity],
            synchronize: true,
            logging: true
        }),
        BookModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
