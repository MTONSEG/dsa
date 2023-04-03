class Encoder {
    constructor() {
        this.storage = new Map();
    }
    input(method, str) {
        if (str.length === 0)
            throw new Error('String length cannot be less than zero');
        switch (method) {
            case 'encrypt':
                console.log(this.encrypt(str));
                break;
            case 'decrypt':
                console.log(this.decrypt(str));
                break;
            default:
                console.log('no such method');
        }
    }
    encrypt(str) {
        let arr = str.trim().split('').reverse();
        this.handleCrypt(arr);
        let key = this.createKey(arr.join(''));
        let result = arr.join('');
        this.storage.set(key, str);
        return result;
    }
    decrypt(str) {
        str = str.trim();
        let arr = str.split('');
        let key = this.createKey(str);
        if (this.storage.has(key)) {
            return this.storage.get(key);
        }
        else {
            this.handleCrypt(arr);
            return arr.reverse().join('');
        }
    }
    handleCrypt(arr) {
        for (let i = 0; i < arr.length - 1; i += 2) {
            this.swap(arr, i, i + 1);
        }
    }
    createKey(str) {
        let result = str[0] + str[str.length - 1] + str.length + str[0].toUpperCase();
        return result.replace(/ /ig, 'x');
    }
    swap(arr, index1, index2) {
        let tmp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = tmp;
    }
}
let test = new Encoder();
test.input('encrypt', 'Привет');
test.input('encrypt', 'string length cannot be less than zero');
test.input('encrypt', 'В терминах Big O назвать сложность выполнение операций: ');
test.input('encrypt', 'которая будет принимать на вход строку и параметр, который будет определять нужно введ');
test.input('encrypt', 'Вставка элемента');
test.input('encrypt', 'Удаление элемента по индексу');
test.input('decrypt', 'етивПр ');
test.input('decrypt', 'rozen ha tsslee  botnncah gten lngrist');
test.input('decrypt', ': ийацеропе нинеолып втьосжнло стьвааз н Oig BахинрмтеВ ');
test.input('decrypt', 'едвво жннуь ятеледпр оетуд быйорот кр,етамар п икуростд хо внаь атиминпрт дебуя ратоко');
test.input('decrypt', 'таенемэла вктаВс');
test.input('decrypt', 'етамар п икуростд хо внаь атиминпрт дебуя ратоко ');
//# sourceMappingURL=app.js.map