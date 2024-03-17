import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsModule } from './cars/cars.module';
import { BranchsModule } from './branchs/branchs.module';

@Module({
  imports: [CarsModule, BranchsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
