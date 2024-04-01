import { PartialType } from "@nestjs/mapped-types";
import { IsOptional, IsString, IsUUID } from "class-validator";
import { CreateBrandDto } from "./create-brand.dto";

export class UpdateBrandDto extends PartialType(CreateBrandDto){
    @IsOptional()
    @IsUUID()
    @IsString()
    readonly id?:string;

}