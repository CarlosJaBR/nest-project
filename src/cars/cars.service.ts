import { Injectable, NotFoundException, Param, ParseIntPipe } from '@nestjs/common';
import {v4 as uuid} from 'uuid';
@Injectable()
export class CarsService {

    private cars = [
        {
            id:uuid(),
            brand:"Toyota",
            model:"Corolla",
        },
        {
            id:uuid(),
            brand:"Toyota",
            model:"Camry",
        },
        {
            id:uuid(),
            brand:"Honda",
            model:"Barreto",
        }
    ]

    findAll(): any {
        return this.cars;
    }

    findOneById(id:string): any {
        const car = this.cars.find(car => car.id == id);
        if(!car)
            throw new NotFoundException(`Car with id ${id} not found`);
        return car;
    }
}
