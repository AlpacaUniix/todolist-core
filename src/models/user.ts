import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm'
 
  
  @Entity()
  export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string
  
    @Column()
    task: string

    @Column()
    date: string

    @Column()
    isCheck: boolean
  
    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date
    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date
    @DeleteDateColumn({ type: 'timestamp' })
    deletedAt: Date | null
  }