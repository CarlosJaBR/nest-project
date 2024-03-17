import { Body, Controller, Delete, Get, HttpCode, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { BranchsService } from './branchs.service';
import { CreateBranchDto } from './dto/create-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';
@Controller('branchs')
export class BranchsController {

    constructor(private readonly branchsService: BranchsService) {}

    @Get()
    findAll() {
        return this.branchsService.findAll();
    }
    @Get(":id")
    findById(@Param("id", ParseUUIDPipe) id:string): any {
        return this.branchsService.findById(id);

    }
    
    @Post("")
    @HttpCode(201)
    create(@Body() branch:CreateBranchDto): Branch {
        console.log(branch)
        return this.branchsService.create(branch);
    }

    @Put(":id")
    update(@Param("id",ParseUUIDPipe) id:string,@Body() branchUpdate:UpdateBranchDto ): Branch {
        return this.branchsService.update(id,branchUpdate);
    }

    @Delete(":id")
    delete(@Param("id", ParseUUIDPipe) id:string){
        return this.branchsService.delete(id);
    }
}
