import { Created } from '../../../libs/mappers';
import { HerosDto } from './dto';
import { HerosService } from './service';

class HerosHandler {
	constructor(private readonly herosService: HerosService) {}

	async main(herosDto: HerosDto): Promise<any> {
		const response = await this.herosService.execute(herosDto.body);
		return Created(response);
	}
}

export default HerosHandler;
