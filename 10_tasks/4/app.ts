class Owner {
	private cars = new Set();
	constructor(
		private name: string,
	) { }

	addCar(carNum: string): void {
		if (this.cars.has(carNum)) console.log('This car is already exist');
		else this.cars.add(carNum);
	}

	getName = (): string => this.name;
	getLastName = (): string => this.name;
	getCars = () => this.cars;
}

class Parking {
	private state = new Map<string, Owner>();

	addCar(carNum: string, name: string): void {
		let owner = new Owner(name);
		let isTrue: boolean = true;

		for (let elem of this.state.values()) {
			if (elem.getName() == name) {
				elem.addCar(carNum);

				owner = elem;

				isTrue = false;

				break;
			}
		}

		this.state.set(carNum, owner);

		if (isTrue) owner.addCar(carNum);
	}

	findOwner(carNum: string): void | boolean {
		if (this.state.has(carNum)) {
			this.state.get(carNum);
		} else {
			return false;
		}
	}

	getState = (): Map<string, Owner> => this.state;
}

class Console {
	constructor(private parking: Parking) { }

	input(carNum: string, name?: string): void | Map<string, Owner> {
		let isTrue: boolean = carNum.toLowerCase() == 'список';

		if (isTrue) {
			let map = this.parking.getState();

			console.log(map);

			return map;
		}

		if (name) {
			this.parking.addCar(carNum, name);
		} else {
			console.log('Input name please');
		}

	}
}

let parking = new Console(new Parking());

parking.input('ae1748', 'Alex');
parking.input('список');
parking.input('ae1748im', 'Alex');
parking.input('список');
parking.input('ae1748im', 'Alex');
parking.input('список');
parking.input('bh1723im', 'Jack');
parking.input('список');
parking.input('ae3548im', 'Mike');
parking.input('список');
parking.input('ae1328im', 'Silvester');
parking.input('список');
parking.input('ae2433im', 'Jack');
parking.input('список');

console.log(parking);