import { Body, Controller,Delete, Get,Put, HttpCode, Param, ParseIntPipe, Post, ParseUUIDPipe, UsePipes,ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

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
    //@UsePipes(ValidationPipe)
    create(@Body() car:CreateCarDto): any {
        console.log(car);
        return this.carService.create(car);
    }
    @Put(":id")
    @HttpCode(201)
    update(@Param("id",ParseUUIDPipe) id:string,@Body() body:UpdateCarDto): any {
        console.log(body);
        return this.carService.update(id,body);
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
