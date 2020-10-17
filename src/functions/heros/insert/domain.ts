class HerosDomain {
	readonly name: string;
	readonly power: string;

	constructor(payload) {
		Object.assign(this, payload);
	}

	toDatabase() {
		return {
			...this,
			createdAt: new Date().toISOString()
		};
	}
}

export default HerosDomain;
