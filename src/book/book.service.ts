import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookEntity } from './book.entity';

@Injectable()
export class BookService {
    constructor(
        @InjectRepository(BookEntity)
        private readonly bookRepository: Repository<BookEntity>,
    ) { }

    findAll(): Promise<BookEntity[]> {
        return this.bookRepository.find();
    }
}