import { BookService } from './book.service';
export declare class BookController {
    private readonly service;
    constructor(service: BookService);
    get(): Promise<import("./book.entity").BookEntity[]>;
}
