import HerosDomain from './domain';
import { DynamoDB } from '../../../libs/adapters';
import { UUIDGenerator } from '../../../libs/helpers/uuid';

export class HerosService {
	constructor(readonly dynamoDB: DynamoDB, readonly idGenerator: UUIDGenerator) {}

	async execute(payload): Promise<any> {
		const hero = new HerosDomain(payload);

		const toDatabase = hero.toDatabase();

		const response = await this.dynamoDB.put({
			TableName: 'Heroes',
			Item: {
				...toDatabase,
				id: this.idGenerator.uuidv4()
			}
		});

		return response;
	}
}
