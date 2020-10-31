import HeroesHandler from './handler';
import { HeroesService } from './service';
import { HeroesSchema } from './validator';
import { AdapterDynamoDB } from '../../../libs/adapters';
import { UUIDGeneratorAdapter } from '../../../libs/helpers/uuid';

export const makeHeroHandler = () => {
	const heroesService = new HeroesService(new AdapterDynamoDB(), new UUIDGeneratorAdapter());
	return new HeroesHandler(heroesService);
};

export const makeHeroSchema = () => {
	return { schema: HeroesSchema };
};
