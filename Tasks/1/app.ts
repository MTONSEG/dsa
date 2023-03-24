class Parking {
	protected state: string[];

	constructor() {
		this.state = [];
	}

	input(str: string): string[] {
		str = str.toLowerCase();

		if (str === 'список') return this.state;
		if (str === 'стоп') {
			console.log('APP IS STOPPED');
			return;
		}

		this.state.push(str);
	}
}

let parking = new Parking();

parking.input('ae1748im');
console.log(parking.input('список'));
parking.input('СТОП');
