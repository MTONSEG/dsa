class Stack {
	private stack: string[] = [];
	private top: number = -1;

	constructor(private stackLength: number) { };

	remove(): string {
		if (this.isEmpty()) 'This stack is empty';
		else {
			let stackLength: number = this.stack.length;
			let url: string = this.stack[stackLength - 1];

			this.stack.pop();
			this.top--;

			if (this.top < -1) {
				this.top = -1;
			}

			console.log(this.stack);

			return url;
		}

	}

	add(url: string): void {
		if (this.isFull()) console.log('This stack is full');
		else {
			this.stack.push(url);
			this.top++;
		}

		console.log(this.stack);
	};

	peek = (): string => this.isEmpty() ? 'This stack is empty' : this.stack[this.top];

	private isFull = (): boolean => this.top == this.stackLength - 1;

	private isEmpty = (): boolean => this.top == -1;
}

const stack = new Stack(5);

// stack.add('site.ua');
// console.log(stack.peek());

// stack.add('facebook.com');
// console.log(stack.peek());

// stack.add('youtube.com');
// console.log(stack.peek());

// stack.add('instagram.com');
// console.log(stack.peek());

// stack.add('figma.com');
// console.log(stack.peek());

// stack.add('google.com');
// console.log(stack.peek());

// stack.remove();
// console.log(stack.peek());

// stack.remove();
// console.log(stack.peek());

// stack.remove();
// console.log(stack.peek());

// stack.remove();
// console.log(stack.peek());

// stack.remove();
// console.log(stack.peek());

// stack.remove();
// console.log(stack.peek());

// stack.remove();
// console.log(stack.peek());



class Stack2 {
	private storage: string[] = [];
	private top: number = -1;

	constructor(private size: number) { };

	add(url: string): void {
		if (this.isFull()) console.log('This stack is full');
		else {
			if (this.top == -1) this.top = 0;

			this.storage[this.top] = url;

			this.top++;

			console.log(this.storage);
		}
	}

	remove(): string {
		if (this.isEmpty()) console.log('This stack is empty');
		else {
			let stackLength: number = this.storage.length;
			let url: string = this.storage[stackLength];

			this.storage[this.top] = null;

			this.top--;

			if (this.top == this.size - 1) this.top = -1;

			console.log(this.storage);

			return url;
		}
	}

	peek = (): string => this.isEmpty() ? 'This stack is empty' : this.storage[this.storage.length - 1];

	private isFull = (): boolean => this.top == this.size - 1;
	private isEmpty = (): boolean => this.top == -1;
}


const stack2 = new Stack2(5);

stack2.add('site.ua');
console.log(stack2.peek());

stack2.add('facebook.com');
console.log(stack2.peek());

stack2.add('youtube.com');
console.log(stack2.peek());

stack2.add('instagram.com');
console.log(stack2.peek());

stack2.add('figma.com');
console.log(stack2.peek());

stack2.add('google.com');
console.log(stack2.peek());

stack2.remove();
console.log(stack2.peek());

stack2.remove();
console.log(stack2.peek());

stack2.remove();
console.log(stack2.peek());

stack2.remove();
console.log(stack2.peek());

stack2.remove();
console.log(stack2.peek());

stack2.remove();
console.log(stack2.peek());

stack2.remove();
console.log(stack2.peek());

stack2.add('google.com');
console.log(stack2.peek());