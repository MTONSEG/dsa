class NodeTree {
    constructor(data) {
        this.left = null;
        this.right = null;
        this.setData = (data) => { this.data = data; };
        this.setLeft = (node) => { this.left = node; };
        this.setRight = (node) => { this.right = node; };
        this.getData = () => this.data;
        this.getLeft = () => this.left;
        this.getRight = () => this.right;
        if (data)
            this.data = data;
    }
    add(data) {
        if (data === this.data)
            return;
        if (data < this.data)
            this.addLeft(data);
        else
            this.addRight(data);
    }
    addLeft(data) {
        if (this.left)
            this.left.add(data);
        else {
            this.setLeft(new NodeTree(data));
        }
    }
    addRight(data) {
        if (this.right)
            this.right.add(data);
        else {
            this.setRight(new NodeTree(data));
        }
    }
}
class Tree {
    add(data) {
        if (this.root)
            this.root.add(data);
        else {
            this.root = new NodeTree(data);
        }
    }
    find(data) {
        if (!this.root)
            console.log('This tree is empty');
        else {
            let current = this.root;
            while (current) {
                if (data === current.getData()) {
                    console.log('Found Node', current);
                    break;
                }
                if (data > current.getData()) {
                    current = current.getRight();
                }
                else {
                    current = current.getLeft();
                }
                if (!current)
                    console.log(`${data} is not defined`);
            }
        }
    }
    preOrder(node, cb) {
        if (!node)
            return;
        if (cb)
            cb(node);
        this.preOrder(node.getLeft(), cb);
        this.preOrder(node.getRight(), cb);
    }
    traverseDeep(data) {
        let isFound = false;
        this.preOrder(this.root, (node) => {
            if (data === node.getData()) {
                console.log('Found:', node);
                isFound = true;
            }
        });
        if (!isFound)
            console.log('is not defined');
    }
    traverseBreath(data) {
        const queue = [this.root];
        let isFound = false;
        while (queue.length > 0) {
            let node = queue.shift();
            if (data === node.getData()) {
                console.log('Found', node);
                isFound = true;
                break;
            }
            ;
            if (node.getLeft())
                queue.push(node.getLeft());
            if (node.getRight())
                queue.push(node.getRight());
        }
        if (!isFound)
            console.log('is not defined');
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
//# sourceMappingURL=app.js.map