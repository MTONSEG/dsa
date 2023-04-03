class CheckBrackets {
    constructor() {
        this.stack = [];
        this.brackets = { ')': '(', ']': '[', '}': '{' };
        this.isBracket = (char) => ['(', '[', '{', ')', ']', '}'].includes(char);
        this.isClose = (char) => [')', ']', '}'].includes(char);
    }
    check(str) {
        for (let char of str) {
            if (this.isBracket(char)) {
                if (this.isClose(char)) {
                    let last = this.stack.pop();
                    if (this.brackets[char] !== last) {
                        return false;
                    }
                }
                else {
                    this.stack.push(char);
                }
            }
        }
        return this.stack.length === 0;
    }
}
let checker = new CheckBrackets();
console.log(checker.check('x * (y - 10)([]){{([[{[]}])}}'));
//# sourceMappingURL=app.js.map