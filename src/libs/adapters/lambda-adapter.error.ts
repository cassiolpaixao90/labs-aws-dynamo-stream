import { lambdaMapperError } from '../mappers';

export const adapterErrorHandler = () => ({
	onError: (handler, next) => {
		if (!handler.error) {
			return next();
		}

		handler.response = lambdaMapperError(handler.error);

		return next();
	}
});
