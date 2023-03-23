class TreeNode<T> {
	private left: TreeNode<T> | null;
	private right: TreeNode<T> | null;

	constructor(private value: T) {
		this.left = null;
		this.right = null;
	}

	add(value: T) {
		if (value === this.value) return;

		if (value < this.value) this.addLeft(value);
		else this.addRight(value);
	}

	setLeft = (node: TreeNode<T>): void => { this.left = node };

	getLeft = (): TreeNode<T> => this.left;

	setRight = (node: TreeNode<T>): void => { this.right = node };

	getRight = (): TreeNode<T> => this.right;

	getValue = (): T => this.value;

	private addLeft(value: T): void {
		if (this.left) this.left.add(value);
		else {
			this.left = new TreeNode(value);
		}
	}

	private addRight(value: T): void {
		if (this.right) this.right.add(value);
		else {
			this.right = new TreeNode(value);
		}
	}
}

class BinaryTree {
	private root: TreeNode<number> | null;

	constructor() {
		this.root = null;
	}

	add(value: number): void {
		if (this.root) this.root.add(value);
		else {
			this.root = new TreeNode(value);
		}
	}


	find(num: number): number {
		if (!this.root) console.log('This tree is Empty');
		else {
			let current: TreeNode<number> = this.root;

			while (current) {
				if (current.getValue() === num) {

					console.log('Wow! This num is found!');

					return num;
				}

				if (num < current.getValue()) {
					current = current.getLeft();
				} else {
					current = current.getRight();
				}
			}

			if (!current) {
				console.log('This num is not defined');
			}
		}

		
	}
}

let tree = new BinaryTree();

tree.add(50);
tree.add(60);
tree.add(10);
tree.add(20);
tree.add(123);
tree.add(1);
tree.add(15);
tree.add(78);

console.log(tree);


tree.find(123);
