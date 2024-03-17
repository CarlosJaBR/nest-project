import { Injectable, NotFoundException } from '@nestjs/common';
import {v4 as uuid} from 'uuid';
import { CreateBranchDto } from './dto/create-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';

@Injectable()
export class BranchsService {

    private branchs: Branch[] = [
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
    
    findAll(): Branch[] {
        return this.branchs;
    }
    findById(id:string): Branch {
        const branch = this.branchs.find(branch => branch.id == id);
        if(!branch)
            throw new NotFoundException(`Branch with id ${id} not found`);
        return branch;
    }

    create(createBranchDto: CreateBranchDto): Branch {
        const branch = {
            id:uuid(),
            ...createBranchDto
        }
        this.branchs.push(branch);
        return branch;
    }

    update(id:string,branchUpdate:UpdateBranchDto):Branch{
        let branch:Branch = this.findById(id);
        if(branchUpdate.id && branchUpdate.id != id)
            throw new NotFoundException(`Branch with id ${id} not found`);

        branch = {
            ...branch,
            ...branchUpdate
        }
        this.branchs = this.branchs.map(c => c.id == id ? branch : c);
        return branch;
    }

    delete(id:string){
        const branch = this.findById(id);
        if(!branch)
            throw new NotFoundException(`Branch with id ${id} not found`);
        return this.branchs = this.branchs.filter(branch => branch.id !== id);
    }




}
