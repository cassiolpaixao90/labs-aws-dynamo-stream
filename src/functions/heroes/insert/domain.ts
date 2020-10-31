class Domain {
	readonly name: string;
	readonly power: string;

	constructor(payload) {
		Object.freeze(Object.assign(this, payload));
	}

	toDatabase() {
		return {
			...this,
			createdAt: new Date().toISOString()
		};
	}
}

export default Domain;
