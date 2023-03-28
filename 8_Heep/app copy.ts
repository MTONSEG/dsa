class HashMap {
	public arr: any[] = [];

	set(key: any, value: any): this {
		this.arr[this.generateHash(key)] = [key, value];
		return this;
	}

	get(key: string): any {
		console.log(this.arr[this.generateHash(key)]);
		return this.arr[this.generateHash(key)];
	}

	generateHash(key: string): number {
		let hash: number = 0;

		for (let i = 0; i < key.length; i++) {
			hash += key.charCodeAt(i);
		}

		return hash;
	}

	print(): void {
		console.table(this.arr);
	}
}

const hash = new HashMap();

hash.set("key1", "value1");
hash.set("key2", "value2");
hash.set("key3", "value3");

hash.print();