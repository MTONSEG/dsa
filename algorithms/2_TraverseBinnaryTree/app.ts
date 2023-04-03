class NodeTree<T> {
	private data: T;
	private left: NodeTree<T> | null = null;
	private right: NodeTree<T> | null = null;

	constructor(data?: T) {
		if (data) this.data = data;
	}

	add(data: T) {
		if (data === this.data) return;

		if (data < this.data) this.addLeft(data);
		else this.addRight(data);
	}

	setData = (data: T): void => { this.data = data };
	setLeft = (node: NodeTree<T>) => { this.left = node };
	setRight = (node: NodeTree<T>) => { this.right = node };

	getData = (): T => this.data;
	getLeft = (): NodeTree<T> => this.left;
	getRight = (): NodeTree<T> => this.right;

	private addLeft(data: T) {
		if (this.left) this.left.add(data);
		else {
			this.setLeft(new NodeTree(data));
		}
	}

	private addRight(data: T) {
		if (this.right) this.right.add(data);
		else {
			this.setRight(new NodeTree(data));
		}
	}
}

class Tree {
	private root: NodeTree<number>;

	add(data: number) {
		if (this.root) this.root.add(data);
		else {
			this.root = new NodeTree(data);
		}
	}

	find(data: number) {
		if (!this.root) console.log('This tree is empty');
		else {

			let current: NodeTree<number> = this.root;

			while (current) {
				if (data === current.getData()) {
					console.log('Found Node', current);
					break;
				}

				if (data > current.getData()) {
					current = current.getRight();
				} else {
					current = current.getLeft();
				}

				if (!current) console.log(`${data} is not defined`);
			}

		}
	}

	preOrder(node: NodeTree<number>, cb: Function): number {
		if (!node) return;

		if (cb) cb(node);

		this.preOrder(node.getLeft(), cb);
		this.preOrder(node.getRight(), cb);
	}

	traverseDeep(data: number): void {
		let isFound: boolean = false;

		this.preOrder(this.root, (node: NodeTree<number>): void => {
			if (data === node.getData()) {
				console.log('Found:', node);

				isFound = true;
			}
		});

		if (!isFound) console.log('is not defined');
	}

	traverseBreath(data: number): void {
		const queue: NodeTree<number>[] = [this.root];
		let isFound: boolean = false;

		while (queue.length > 0) {
			let node: NodeTree<number> = queue.shift();

			if (data === node.getData()) {
				console.log('Found', node);

				isFound = true;

				break;
			};

			if (node.getLeft()) queue.push(node.getLeft());
			if (node.getRight()) queue.push(node.getRight());
		}

		if (!isFound) console.log('is not defined');
	}
}

let tree = new Tree();

tree.add(100);
tree.add(120);
tree.add(10);
tree.add(20);
tree.add(30);
tree.add(130);
tree.add(90);
console.log(tree);
tree.traverseDeep(10);
tree.traverseBreath(30);

tree.traverseDeep(330);
tree.traverseBreath(3120);
