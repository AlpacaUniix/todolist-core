import {
    Column,
    Entity,
    PrimaryGeneratedColumn
  } from 'typeorm'
 
  
  @Entity()
  export class Task {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({type: String,nullable: true})
    task: string | null;

    @Column({type: Date,nullable: true})
    date: Date | null;

    @Column({type: Boolean, default: false})
    isCheck: boolean;

  }