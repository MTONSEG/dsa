class NodeItem {
    constructor(name) {
        this.nodeList = [];
        this.getName = () => this.name;
        this.addEdge = (vertex) => { this.nodeList.push(vertex); };
        this.getNodeList = () => this.nodeList;
        this.setNodeList = (nodeList) => { this.nodeList = nodeList; };
        this.name = name;
    }
    removeEdge(vertex) {
        let index = this.nodeList.indexOf(vertex);
        if (index >= 0)
            this.nodeList.splice(index, 1);
        else {
            console.log('This vertex is not define');
        }
    }
}
class Graph {
    constructor() {
        this.list = new Map();
    }
    addVertex(vertex) {
        if (this.list.has(vertex)) {
            console.log('Already exist');
        }
        else {
            this.list.set(vertex, new NodeItem(vertex));
        }
    }
    addEdge(vert1, vert2) {
        let first = this.list.get(vert1);
        let second = this.list.get(vert2);
        if (first && second) {
            first.addEdge(vert2);
            second.addEdge(vert1);
        }
        else {
            console.log('Error');
        }
    }
    removeEdge(vert1, vert2) {
        let first = this.list.get(vert1);
        let second = this.list.get(vert2);
        if (first && second) {
            first.removeEdge(vert2);
            second.removeEdge(vert1);
        }
        else {
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
//# sourceMappingURL=app.js.map