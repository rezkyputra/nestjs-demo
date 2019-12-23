import { Controller, Get } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { BookService } from './book.service';

@ApiUseTags('book')
@Controller('book')
export class BookController {
    constructor(private readonly service: BookService) { }

    @Get()
    async get() {
        return await this.service.findAll();
    }

}
