class NodeItem {
	private name: string;
	private nodeList: string[] = [];

	constructor(name: string) {
		this.name = name;
	}

	getName = (): string => this.name;

	addEdge = (vertex: string): void => { this.nodeList.push(vertex) };
	removeEdge(vertex: string): void {
		let index: number = this.nodeList.indexOf(vertex);

		if (index >= 0) this.nodeList.splice(index, 1);
		else {
			console.log('This vertex is not define');
		}
	}

	getNodeList = (): string[] => this.nodeList;
	setNodeList = (nodeList: string[]): void => { this.nodeList = nodeList };
}

class Graph {
	private list = new Map();

	addVertex(vertex: string): void {
		if (this.list.has(vertex)) {
			console.log('Already exist');
		} else {
			this.list.set(vertex, new NodeItem(vertex));
		}
	}

	addEdge(vert1: string, vert2: string): void {
		let first: NodeItem = this.list.get(vert1);
		let second: NodeItem = this.list.get(vert2);

		if (first && second) {
			first.addEdge(vert2);
			second.addEdge(vert1);
		} else {
			console.log('Error');
		}
	}

	removeEdge(vert1: string, vert2: string): void {
		let first: NodeItem = this.list.get(vert1);
		let second: NodeItem = this.list.get(vert2);

		if (first && second) {
			first.removeEdge(vert2);
			second.removeEdge(vert1);
		} else {
			console.log('Error');
		}
	}
}

const graph = new Graph();

graph.addVertex('Mike');
graph.addVertex('Alex');
graph.addVertex('Smile');
graph.addVertex('Jack');

graph.addEdge('Mike', 'Smiler');
graph.addEdge('Mike', 'Alex');
graph.addEdge('Jack', 'Smile');
graph.addEdge('Jack', 'Mike');
graph.addEdge('Alex', 'Jack');

graph.removeEdge('Mike', 'Alex');
graph.removeEdge('Jack', 'Alex');

console.log(graph);


let test = Array(3);
console.log(test)