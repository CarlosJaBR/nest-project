import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsModule } from './cars/cars.module';
import { BrandsModule } from './brands/brands.module';
import { BrandModule } from './brand/brand.module';

@Module({
  imports: [CarsModule, BrandsModule, BrandModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
