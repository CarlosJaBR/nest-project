import { IsOptional, IsString, IsUUID } from "class-validator";

export class UpdateBrandDto{
    @IsOptional()
    @IsUUID()
    readonly id?:string;
    @IsOptional()
    @IsString()
    readonly name?:string;
}