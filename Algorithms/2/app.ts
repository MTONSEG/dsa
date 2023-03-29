class NodeTree<T> {
	private data: T;
	private left: NodeTree<T> | null = null;
	private right: NodeTree<T> | null = null;

	constructor(data?: T) {
		this.data = data;
	}

	setData = (data: T): void => { this.data = data };
	setLeft = (node: NodeTree<T>) => { this.left = node };
	setRight = (node: NodeTree<T>) => { this.right = node };

	getData = (): T => this.data;
	getLeft = (): NodeTree<T> => this.left;
	getRight = (): NodeTree<T> => this.right;
}

class Tree {
	private root: NodeTree<string>
}