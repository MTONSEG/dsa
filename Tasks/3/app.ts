class Parking3 {
	protected state: string[];

	constructor() {
		this.state = [];
	}

	go(str: string): string[] {
		str = str.toLowerCase();

		let size: number = this.state.length;

		if (str === 'список') return this.state;
		if (str === 'стоп') {
			console.log('APP IS STOPPED');
			return;
		}

		if (this.state.includes(str)) console.log('Already exist');
		else {
			this.state.push(str);
		}
		
	}
}

let parking3 = new Parking3();

parking3.go('ae1111im');
parking3.go('ae2222im');
parking3.go('ae2222im');
parking3.go('ae3333im');

console.log(parking3.go('список'));