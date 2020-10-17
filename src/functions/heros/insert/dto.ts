import { MapperToDto } from '../../../libs/mappers';

export interface HerosDto extends MapperToDto<'body'> {
	body: {
		name: string;
		power: string;
	};
}
