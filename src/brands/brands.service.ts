import { Injectable, NotFoundException } from '@nestjs/common';
import {v4 as uuid} from 'uuid';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import {Brand} from './entities/brand.entity';

@Injectable()
export class BrandsService {

    private brands: Brand[] = []
    
    findAll(){
        return this.brands;
    }
    findById(id:string){
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
            return brand;
        });
    }

    delete(id:string){
        let brand = this.findById(id);
        this.brands = this.brands.filter(brand => brand.id !== id); 
    }




}
