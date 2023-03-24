class Parking3 {
    constructor() {
        this.state = [];
    }
    go(str) {
        str = str.toLowerCase();
        let size = this.state.length;
        if (str === 'список')
            return this.state;
        if (str === 'стоп') {
            console.log('APP IS STOPPED');
            return;
        }
        if (this.state.includes(str))
            console.log('Already exist');
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
//# sourceMappingURL=app.js.map