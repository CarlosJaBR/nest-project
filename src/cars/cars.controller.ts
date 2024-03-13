import { Body, Controller,Delete, Get,Put, HttpCode, Param, ParseIntPipe, Post, ParseUUIDPipe } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

    constructor(
        private readonly carService: CarsService
    ) {

    }
    
    @Get()
    findAll(): any {
        return this.carService.findAll();
    }
    @Post()
    @HttpCode(201)
    create(@Body() car:CreateCarDto): string {
        console.log(car);
        return car;
    }
    @Put()
    @HttpCode(201)
    update(@Param("id",ParseUUIDPipe) id:string,@Body() body:any): any {
        console.log(body);
        return {id,body};
    }
    @Delete()
    @HttpCode(201)
    delete(@Param("id", ParseUUIDPipe) id:string): any {
        console.log(id);
        return id;
    }
    @Get("test")
    test(): string {
        return 'other route test';
    }
    @Get(":id")
    findById(@Param("id",ParseUUIDPipe) id:string): any {   
        return this.carService.findOneById(id);
    }  
}
