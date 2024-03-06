import { Controller, Get, HttpCode, Param, Post } from '@nestjs/common';

@Controller('cars')
export class CarsController {
    @Get()
    findAll(): string {
        return 'This action returns all cars';
    }
    @Post()
    @HttpCode(204)
    create(): string {
        return 'This action adds a new car';
    }
    @Get("test")
    test(): string {
        return 'other route test';
    }
    @Get(":id")
    findById(@Param("id") id:string): string {  
        console.log(id);
        return `This action returns car with id ${id}`;
    }  
}
