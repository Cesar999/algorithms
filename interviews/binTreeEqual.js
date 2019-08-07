class Node {
    constructor(val){
        this.value = val;
        this.right = null;
        this.left = null;
    }
}

const root1 = new Node('A');
root1.left = new Node('B');
root1.right = new Node('C');
root1.left.left = new Node('D');
root1.left.right = new Node('E');
root1.right.right = new Node('F');
root1.right.left = new Node('G');

const root2 = new Node('A');
root2.left = new Node('B');
root2.right = new Node('C');
root2.left.left = new Node('D');
root2.left.right = new Node('E');
root2.right.right = new Node('F');
root2.right.left = new Node('G');

function areEqual(node1, node2){
    if(node1===null && node2===null){
        return true;
    }
    if(node1!==null && node2!==null){
        return ((node1.value === node2.value)
                &&areEqual(node1.left, node2.left)
                &&areEqual(node1.right, node2.right)
            );
    }
    return false;
}

console.log(areEqual(root1, root2));
