import { IsOptional, IsString, IsUUID } from "class-validator";

export class UpdateBranchDto{
    @IsOptional()
    @IsUUID()
    readonly id?:string;
    @IsOptional()
    @IsString()
    readonly name?:string;
}