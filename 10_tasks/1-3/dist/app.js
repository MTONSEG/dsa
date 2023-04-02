class Parking {
    constructor() {
        this.state = [];
        this.getState = () => this.state;
        this.toArray = () => this.state;
    }
    addCar(num, car) {
        this.state.push(this.handleProp(num, car));
    }
    addFront(num, car) {
        this.state.splice(0, 0, this.handleProp(num, car));
    }
    ;
    addAfter(num, car, index) {
        this.state.splice(index, 0, this.handleProp(num, car));
    }
    handleProp(num, car) {
        return {
            number: num,
            car: car
        };
    }
}
class Console {
    constructor(parking) {
        this.parking = parking;
        this.parking = new Parking();
    }
    input(number, car) {
        let isList = number.toLowerCase() === 'список';
        if (car)
            this.handleCarName(car);
        if (isList) {
            console.log(this.parking.toArray());
        }
        else {
            this.parking.addCar(number, car);
            console.log(this.parking.toArray());
        }
    }
    handleCarName(car) {
        car = car[0].toUpperCase() + car.slice(1).toLowerCase();
    }
}
class Console2 extends Console {
    insertFront(number, car) {
        this.parking.addFront(number, car);
        console.log(this.parking.toArray());
    }
    insertAfter(after, number, car) {
        this.parking.addAfter(number, car, after);
        console.log(this.parking.toArray());
    }
}
class Console3 extends Console2 {
    input(number, car) {
        for (let elem of this.parking.getState()) {
            elem.number = elem.number.toLowerCase();
            if (number === elem.number) {
                console.log(`This car is already exist`);
                break;
            }
        }
        super.input(number, car);
    }
}
const parking = new Console(new Parking());
parking.input('список');
parking.input('ae1748im', 'Hyundai');
parking.input('ae2348im', 'Audi');
parking.input('ae8744im', 'Mercedes');
parking.input('ae5748im', 'Honda');
parking.input('ae1348im', 'KIA');
parking.input('cписок');
const parking2 = new Console2(new Parking());
parking2.input('ae5748im', 'Honda');
parking2.input('ae2348im', 'Audi');
parking2.input('ae8744im', 'Mercedes');
parking2.input('ae2348im', 'Audi');
parking2.input('ae8744im', 'Mercedes');
parking2.insertFront('ae1111im', 'Tesla');
parking2.insertAfter(1, 'ae2222im', 'Tesla');
parking2.input('список');
const parking3 = new Console3(new Parking());
parking3.input('ae5748im', 'Honda');
parking3.input('ae5748im', 'Honda');
parking3.input('ae8744im', 'Mercedes');
parking3.input('ae2348im', 'Audi');
parking3.input('ae8744im', 'Mercedes');
parking3.input('список');
//# sourceMappingURL=app.js.map