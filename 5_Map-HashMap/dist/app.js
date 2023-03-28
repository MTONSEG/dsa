class MapCustom {
    constructor() {
        // private state: any[] = [];
        this.state = {};
    }
    set(key, value) {
        this.state[key] = [key, value];
        return this;
    }
    get(key) {
        if (this.has(key))
            return this.state[key][1];
    }
    has(key) {
        if (this.state[key])
            return true;
        return false;
    }
    clear() {
        this.state = [];
    }
    keys() {
        return Object.keys(this.state);
    }
    values() {
        return this.keys().map(el => this.get(el));
    }
    entries() {
        return this.keys().map(el => this.state[el]);
    }
}
let map = new MapCustom();
map.set('hello', { name: 'Name', lastName: 'LastName' });
map.set('hero', 'SuperHero');
map.set(2, 'Number =)');
console.log(map.has('test'));
console.log(map.has(2));
console.log(map.get(22));
console.log(map.get('hello'));
console.log(map.keys());
console.log(map.values());
console.log(map.entries());
console.log(map);
class HashMap {
    constructor() {
        this.state = {};
        this.createHash = (key) => String(key).split('').reverse().join('');
    }
    set(key, value) {
        if (this.has(key)) {
            this.state[this.createHash(key)].push({ key: key, value: value });
        }
        else {
            this.state[this.createHash(key)] = [{ key: key, value: value }];
        }
    }
    get(key) {
        console.log(this.state[this.createHash(key)]);
        return this.state[this.createHash(key)];
    }
    has(key) {
        if (this.state[this.createHash(key)])
            return true;
        return false;
    }
}
let hash = new HashMap();
console.log(hash);
hash.set('employee', 'Jonson');
hash.set('car', { name: 'Aston Martin' });
hash.set('car', { name: 'BMW', brand: 'X5' });
console.log(hash.has('lol'));
//# sourceMappingURL=app.js.map