class Owner {
    constructor(name) {
        this.name = name;
        this.cars = new Set();
        this.getName = () => this.name;
        this.getLastName = () => this.name;
        this.getCars = () => this.cars;
    }
    addCar(carNum) {
        if (this.cars.has(carNum))
            console.log('This car is already exist');
        else
            this.cars.add(carNum);
    }
}
class Parking {
    constructor() {
        this.state = new Map();
        this.getState = () => this.state;
    }
    addCar(carNum, name) {
        let owner = new Owner(name);
        let isTrue = true;
        for (let elem of this.state.values()) {
            if (elem.getName() == name) {
                elem.addCar(carNum);
                owner = elem;
                isTrue = false;
                break;
            }
        }
        this.state.set(carNum, owner);
        if (isTrue)
            owner.addCar(carNum);
    }
    findOwner(carNum) {
        if (this.state.has(carNum)) {
            this.state.get(carNum);
        }
        else {
            return false;
        }
    }
}
class Console {
    constructor(parking) {
        this.parking = parking;
    }
    input(carNum, name) {
        let isTrue = carNum.toLowerCase() == 'список';
        if (isTrue) {
            let map = this.parking.getState();
            console.log(map);
            return map;
        }
        if (name) {
            this.parking.addCar(carNum, name);
        }
        else {
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
//# sourceMappingURL=app.js.map