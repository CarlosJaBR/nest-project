import { Body, Controller, Delete, Get, HttpCode, Param, ParseUUIDPipe, Patch, Post, Put } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
@Controller('brands')
export class BrandsController {

    constructor(private readonly brandsService: BrandsService) {}

    @Get()
    findAll() {
        return this.brandsService.findAll();
    }
    @Get(":id")
    findById(@Param("id", ParseUUIDPipe) id:string){
        return this.brandsService.findById(id);

    }
    
    @Post("")
    @HttpCode(201)
    create(@Body() brand:CreateBrandDto) {
        console.log(brand)
        return this.brandsService.create(brand);
    }

    @Patch(":id")
    update(@Param("id",ParseUUIDPipe) id:string,@Body() brandUpdate:UpdateBrandDto ) {
        return this.brandsService.update(id,brandUpdate);
    }

    @Delete(":id")
    delete(@Param("id", ParseUUIDPipe) id:string){
        return this.brandsService.delete(id);
    }
}
