import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AnimalType } from '../enum/AnimalTypeEnum';
import { User } from 'src/user/entities/user.entity';

@Entity()
export class Post {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: 'varchar', length: 30 })
	title: string;

	@Column({ type: 'varchar', length: 30 })
	name: string;

	@Column({ type: 'text' })
	description: string;

	@Column({ type: 'enum', enum: AnimalType, default: AnimalType.OTHER })
	type: string;

	@Column({ type: 'simple-array' })
	pictures: string[];

	@ManyToOne(() => User, (user) => user.posts)
	user: User;
}
