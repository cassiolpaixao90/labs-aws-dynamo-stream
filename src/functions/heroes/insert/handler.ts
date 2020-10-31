import { Created } from '../../../libs/mappers';
import { HeroesDto } from './dto';
import { HeroesService } from './service';

class HeroesHandler {
	constructor(private readonly heroesService: HeroesService) {}

	async main(heroesDto: HeroesDto): Promise<any> {
		const response = await this.heroesService.execute(heroesDto.body);
		return Created(response);
	}
}

export default HeroesHandler;
