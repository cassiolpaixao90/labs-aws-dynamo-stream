import { v4 as uuidv4 } from 'uuid';

export interface UUIDGenerator {
	uuidv4();
}

export class UUIDGeneratorAdapter implements UUIDGenerator {
	uuidv4() {
		return uuidv4();
	}
}
