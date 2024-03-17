import { Module } from '@nestjs/common';
import { BranchsController } from './branchs.controller';
import { BranchsService } from './branchs.service';


@Module({

  controllers: [BranchsController],

  providers: [BranchsService]
})
export class BranchsModule {}
