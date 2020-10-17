import * as Yup from 'yup';

export const HerosSchema = Yup.object().shape({
	body: Yup.object().shape({
		name: Yup.string().min(2).max(100).required(),
		power: Yup.string().max(20).required()
	})
});
