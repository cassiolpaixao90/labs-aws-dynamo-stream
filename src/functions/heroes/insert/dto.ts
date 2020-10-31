import { MapperToDto } from '../../../libs/mappers';

export interface HeroesDto extends MapperToDto<'body'> {
	body: {
		name: string;
		power: string;
	};
}
