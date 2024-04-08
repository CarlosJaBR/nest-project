import { Injectable, NotFoundException } from '@nestjs/common';
import {v4 as uuid} from 'uuid';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import {Brand} from './entities/brand.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BrandsService {


    constructor(
        @InjectRepository(Brand)
        private readonly brandRepository: Repository<Brand>
    ){}

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

    async create(createBrandDto: CreateBrandDto) {
        
        const brand = this.brandRepository.create(createBrandDto);
        await this.brandRepository.save(brand); 
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

    fillBrandsWithSeedData(brands:Brand[]):void{
        this.brands= brands;
    }




}
