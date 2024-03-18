import { Injectable, NotFoundException } from '@nestjs/common';
import {v4 as uuid} from 'uuid';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

@Injectable()
export class BrandsService {

    private brands: Brand[] = []
    
    findAll(): Brand[] {
        return this.brands;
    }
    findById(id:string): Brand {
        const brand = this.brands.find(brand => brand.id == id);
        if(!brand)
            throw new NotFoundException(`Brand with id ${id} not found`);
        return brand;
    }

    create(createBrandDto: CreateBrandDto): Brand {
        const {name} = createBrandDto
        const brand = {
            name,
            id:uuid(),
            createdAt: new Date().getTime()            
        }
        this.brands.push(brand);
        return brand;
    }

    update(id:string,brandUpdate:UpdateBrandDto){

        let brandDB = this.findById(id);
        this.brands = this.brands.map(brand => {
            if(brand.id === id){
                brandDB = {...brandDB, ...brandUpdate};
            }
            return brandDB;
        });
    }

    delete(id:string){
        const brand = this.findById(id);
        if(!brand)
            throw new NotFoundException(`Brand with id ${id} not found`);
        return this.brands = this.brands.filter(brand => brand.id !== id);
    }




}
