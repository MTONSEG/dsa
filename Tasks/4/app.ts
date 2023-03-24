class Parking4 {
	private state = new Map();

	go(str: string, owner?: string) {
		str = str.toLowerCase();

		if (str === 'список' || str === 'автомобили') return this.state.keys();
		if (str === 'владельцы') return this.state.values();
		if (str === 'стоп') {
			console.log('APP IS STOPPED');
			return;
		}

		if (owner) this.state.set(str, owner);
		else {
			console.log('Please, enter owner');
		}

	}
}

const parking4 = new Parking4();

parking4.go('ae1111im', 'Jack');
parking4.go('ae2222im', 'Simon');
parking4.go('ae2222im', 'Low');
parking4.go('ae3333im', 'Jonson');

console.log(parking4.go('список'));
console.log(parking4.go('владельцы'));
console.log(parking4.go('автомобили'));