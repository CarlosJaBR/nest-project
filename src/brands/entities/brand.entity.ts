import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Brand {
    @PrimaryGeneratedColumn('uuid')
    id: string; 
    @Column('text', {unique: true})
    name: string;
    @Column('text', {unique: true})
    slug: string;
    @Column('text', {nullable: true})
    description: string;
    @Column('timestamp',{nullable:false, default: () => 'CURRENT_TIMESTAMP'})
    createdAt: number;
    
}