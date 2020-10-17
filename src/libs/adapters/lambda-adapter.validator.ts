import { BadRequestException } from '../errors';

export const adapterValidator = ({ schema }) => ({
	before: async (handler) => {
		try {
			if (!schema) {
				return Promise.resolve();
			}

			await schema.validate(handler.event, { abortEarly: false });

			return Promise.resolve();
		} catch (err) {
			throw new BadRequestException({ message: err.name, details: err.errors });
		}
	}
});
