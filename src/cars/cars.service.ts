import { Injectable, NotFoundException, Param, ParseIntPipe } from '@nestjs/common';
import {v4 as uuid} from 'uuid';
import { UpdateCarDto } from './dto/update-car.dto';
import { CreateCarDto } from './dto/create-car.dto';
import { Car } from './interface/car.interface';
@Injectable()
export class CarsService {

    private cars:Car[] = []
     
    findAll(): Car[] {
        return this.cars;
    }

    findOneById(id:string): Car {
        const car = this.cars.find(car => car.id == id);
        if(!car)
            throw new NotFoundException(`Car with id ${id} not found`);
        return car;
    }

    create(createCarDto: CreateCarDto): Car {
        const car = {
            id:uuid(),
            ...createCarDto
        }
        this.cars.push(car);
        return car;
    }
    
    update(id:string,carUpdate:UpdateCarDto):any{
        let car:Car = this.findOneById(id);
        if(carUpdate.id && carUpdate.id != id)
            throw new NotFoundException(`Car with id ${id} not found`);
        car = {
            ...car,
            ...carUpdate
        }
        this.cars = this.cars.map(c => c.id == id ? car : c);
        return car;
    }

    delete(id:string):any{
        let car:Car = this.findOneById(id);
        if(!car)
            throw new NotFoundException(`Car with id ${id} not found`);
        return this.cars = this.cars.filter(car => car.id !== id);
    }

    fillCarsWithSeedData(cars:Car[]):void{
        this.cars = cars;
    }
}
