import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Test {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  age: number;

  @Column()
  name: string;
}
