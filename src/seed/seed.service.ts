import { Injectable } from '@nestjs/common';
import { CreateSeedDto } from './dto/create-seed.dto';
import { UpdateSeedDto } from './dto/update-seed.dto';
import { CarsService } from 'src/cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';
import { carsSeed } from './data/cars.seed';
import { brandSeed } from './data/brand.seed';

@Injectable()
export class SeedService {

  constructor(
    private readonly carService: CarsService,
    private readonly brandService: BrandsService
  ){}
  populateDB(){
    this.carService.fillCarsWithSeedData(carsSeed)
    this.brandService.fillBrandsWithSeedData(brandSeed)

  }
}
