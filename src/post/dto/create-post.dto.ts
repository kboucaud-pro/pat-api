import { IsAlphanumeric, IsEmail, IsEnum, IsNotEmpty, IsString, Matches, MinLength } from 'class-validator';
import { AnimalType } from '../enum/AnimalTypeEnum';
import { User } from 'src/user/entities/user.entity';

export class CreatePostDto {
	@IsString()
	@MinLength(2, { message: 'Title must have at least 2 characters' })
	@IsNotEmpty()
	@IsAlphanumeric()
	title: string;

	@IsString()
	@MinLength(2, { message: 'Name must have at least 2 characters' })
	@IsNotEmpty()
	@IsAlphanumeric()
	name: string;

	@IsString()
	@IsAlphanumeric()
	description: string;

	@IsEnum(AnimalType)
	@IsString()
	type: AnimalType;

	@IsNotEmpty()
	pictures: string[];

	@IsNotEmpty()
	user: User;
}
