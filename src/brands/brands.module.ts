import { Module } from '@nestjs/common';
import { BrandsController } from './brands.controller';
import { BrandsService } from './brands.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Brand } from './entities/brand.entity'; 


@Module({

  controllers: [BrandsController],
  providers: [BrandsService],
  exports: [BrandsService],
  imports: [
    TypeOrmModule.forFeature([Brand]),
  ]
})
export class BrandsModule {}
