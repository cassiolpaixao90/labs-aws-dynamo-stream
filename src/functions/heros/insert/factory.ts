import HerosHandler from './handler';
import { HerosService } from './service';
import { HerosSchema } from './validator';
import { AdapterDynamoDB } from '../../../libs/adapters';
import { UUIDGeneratorAdapter } from '../../../libs/helpers/uuid';

export const makeHeroHandler = (): HerosHandler => {
	const herosService = new HerosService(new AdapterDynamoDB(), new UUIDGeneratorAdapter());
	return new HerosHandler(herosService);
};

export const makeHeroSchema = (): any => {
	return { schema: HerosSchema };
};
