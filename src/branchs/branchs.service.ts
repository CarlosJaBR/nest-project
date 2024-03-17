import { Injectable } from '@nestjs/common';
import {v4 as uuid} from 'uuid';

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


}
