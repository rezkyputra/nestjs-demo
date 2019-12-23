import { Repository } from 'typeorm';
import { BookEntity } from './book.entity';
export declare class BookService {
    private readonly bookRepository;
    constructor(bookRepository: Repository<BookEntity>);
    findAll(): Promise<BookEntity[]>;
}
