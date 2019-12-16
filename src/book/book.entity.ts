import { Entity, PrimaryGeneratedColumn, CreateDateColumn, Column } from 'typeorm'

@Entity('books')
export class BookEntity {
    @PrimaryGeneratedColumn('uuid') id: string;

    @CreateDateColumn() created: Date;

    @Column('text') title: string;

    @Column('text') category: string;

    @Column('text') content: string;

    @Column('text') writer: string;
    
    @Column('text') publisher: string;
}