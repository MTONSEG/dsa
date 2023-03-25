class Parking2 {
    constructor() {
        this.state = [];
    }
    go(str, index) {
        str = str.toLowerCase();
        let size = this.state.length;
        if (str === 'список')
            return this.state;
        if (str === 'стоп') {
            console.log('APP IS STOPPED');
            return;
        }
        if (index) {
            if (index > size) {
                this.state.push(str);
            }
            else {
                index--;
                this.state.splice(index, 0, str);
            }
        }
    }
}
let parking2 = new Parking2();
parking2.go('ae1111im', 3);
parking2.go('ae2222im', 2);
parking2.go('ae3333im', 1);
console.log(parking2.go('список'));
//# sourceMappingURL=app.js.map