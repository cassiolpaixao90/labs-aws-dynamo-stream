export const Ok = (body: any): any => ({
	statusCode: 200,
	body: JSON.stringify(body)
});

export const Created = (body: any): any => ({
	statusCode: 201,
	body: JSON.stringify(body)
});

export const BadRequest = (error: any): any => ({
	statusCode: 400,
	body: JSON.stringify({
		type: error.type,
		message: error.message,
		details: error.details
	})
});

export const InternalServerError = (error: Error): any => ({
	statusCode: 500,
	body: JSON.stringify({
		message: error.message
	})
});
