import Domain from './domain';
import { DynamoDB } from '../../../libs/adapters';
import { UUIDGenerator } from '../../../libs/helpers/uuid';

export class HeroesService {
	constructor(private readonly dynamoDB: DynamoDB, private readonly idGenerator: UUIDGenerator) {}

	async execute(payload): Promise<any> {
		const domain = new Domain(payload);

		const toDatabase = domain.toDatabase();

		return this.dynamoDB.put({
			TableName: 'Heroes',
			Item: {
				...toDatabase,
				id: this.idGenerator.uuid4()
			}
		});
	}
}
