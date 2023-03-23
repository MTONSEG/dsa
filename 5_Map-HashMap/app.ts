let test: string[] = ['first', 'second', 'third'];
let test2: string[] = ['one', 'two', 'third'];

const set = new Set([...test, ...test2]);


console.log(set.entries());


