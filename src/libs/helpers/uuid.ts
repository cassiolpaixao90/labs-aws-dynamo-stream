import { v4 as uuid4 } from 'uuid';

export interface UUIDGenerator {
	uuid4();
}

export class UUIDGeneratorAdapter implements UUIDGenerator {
	uuid4() {
		return uuid4();
	}
}
