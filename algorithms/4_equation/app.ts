interface Brackets {
	')': string,
	']': string;
	'}': string;
}

class CheckBrackets {
	private stack: string[] = [];
	private brackets: Brackets = { ')': '(', ']': '[', '}': '{' };

	check(str: string): boolean {
		for (let char of str) {

			if (this.isBracket(char)) {

				if (this.isClose(char)) {
					let last: string = this.stack.pop();

					if (this.brackets[char] !== last) {
						return false;
					}
				} else {
					this.stack.push(char);
				}
			}
			
		}

		return this.stack.length === 0;
	}


	private isBracket = (char: string): boolean => ['(', '[', '{', ')', ']', '}'].includes(char);
	private isClose = (char: string): boolean => [')', ']', '}'].includes(char);
}

let checker = new CheckBrackets();

console.log(checker.check('x * (y - 10)([]){{([[{[]}])}}'));

