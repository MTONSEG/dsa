class TreeNode {
    constructor(value) {
        this.value = value;
        this.setLeft = (node) => { this.left = node; };
        this.getLeft = () => this.left;
        this.setRight = (node) => { this.right = node; };
        this.getRight = () => this.right;
        this.getValue = () => this.value;
        this.left = null;
        this.right = null;
    }
    add(value) {
        if (value === this.value)
            return;
        if (value < this.value)
            this.addLeft(value);
        else
            this.addRight(value);
    }
    addLeft(value) {
        if (this.left)
            this.left.add(value);
        else {
            this.left = new TreeNode(value);
        }
    }
    addRight(value) {
        if (this.right)
            this.right.add(value);
        else {
            this.right = new TreeNode(value);
        }
    }
}
class BinaryTree {
    constructor() {
        this.root = null;
    }
    add(value) {
        if (this.root)
            this.root.add(value);
        else {
            this.root = new TreeNode(value);
        }
    }
    find(num) {
        if (!this.root)
            console.log('This tree is Empty');
        else {
            let current = this.root;
            while (current) {
                if (current.getValue() === num) {
                    console.log('Wow! This num is found!');
                    return num;
                }
                if (num < current.getValue()) {
                    current = current.getLeft();
                }
                else {
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
//# sourceMappingURL=app.js.map