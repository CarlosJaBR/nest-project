import { Injectable, NotFoundException } from '@nestjs/common';
import {v4 as uuid} from 'uuid';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

@Injectable()
export class BrandsService {

    private brands: Brand[] = [
        {
            id:uuid(),
            name:"Toyota"
        },
        {
            id:uuid(),
            name:"Honda"
        },
        {
            id:uuid(),
            name:"Barreto"
        },
        {
            id:uuid(),
            name: "Hyundai"
        }
    
    ]
    
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
        const brand = {
            id:uuid(),
            ...createBrandDto
        }
        this.brands.push(brand);
        return brand;
    }

    update(id:string,brandUpdate:UpdateBrandDto):Brand{
        let brand:Brand = this.findById(id);
        if(brandUpdate.id && brandUpdate.id != id)
            throw new NotFoundException(`Brand with id ${id} not found`);

        brand = {
            ...brand,
            ...brandUpdate
        }
        this.brands = this.brands.map(c => c.id == id ? brand : c);
        return brand;
    }

    delete(id:string){
        const brand = this.findById(id);
        if(!brand)
            throw new NotFoundException(`Brand with id ${id} not found`);
        return this.brands = this.brands.filter(brand => brand.id !== id);
    }




}
