class Queue {
    constructor(){
        this.data = [];
        this.length = 0;
    }
    isEmpty(){
        if(this.length===0) return true;
        return false;
    }
    enqueue(node){
        this.length++;
        this.data.push(node);
    }
    dequeue(){
        this.length--;
        return this.data.shift();
    }
}


class Node {
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        const newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while(true){
                if(value < currentNode.value){
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    if(!currentNode.right){
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    lookup(value){
        if(!this.root){
            console.log(false);
            return false;
        }
        let currentNode = this.root;
        while(currentNode){
            if(value<currentNode.value){
                currentNode = currentNode.left;
            } else if (value>currentNode.value){
                currentNode = currentNode.right;
            } else {
                console.log(true);
                return true;
            }
        }
        console.log(false);
        return false;
    }

    remove(value){

    }

    display(){
        let data = this.bfs();
        let k = 1;
        let indent;
        while(k<data.length){
            indent = data.length/k;
            let temp = '';
            let offset;
            for(let i=k; i<=k*2-1; i++){
                offset = data[i-1].toString().length-1;
                temp +=  '.'.repeat(indent+1-offset) + data[i-1] + '.'.repeat(indent);
            }
            console.log(temp);
            temp = '';
            k = k*2;
        }
    }

    dfs(opt='in-order'){
        const data = [];
        DFS(this.root);
        console.log(data);
        return data;

        function DFS(node){
            if(opt=='pre-order'){
                data.push(node.value);
                if(node.left) DFS(node.left);
                if(node.right) DFS(node.right);
            } else if(opt === 'post-order'){
                if(node.left) DFS(node.left);
                if(node.right) DFS(node.right);
                data.push(node.value);
            } else {
                if(node.left) DFS(node.left);
                data.push(node.value);
                if(node.right) DFS(node.right);
            }
        }
    }

//0  1 2   3 4 5 6   7 8 9 10 11 12 13 14
    bfs(){
        let data = [];
        let queue = new Queue();
        let currentNode = this.root;
        queue.enqueue(currentNode);
        while(!queue.isEmpty()){
            currentNode = queue.dequeue();
            if(currentNode!=='x'){
                data.push(currentNode.value);
                if(currentNode.left) {queue.enqueue(currentNode.left);}
                else {queue.enqueue('x');}

                if(currentNode.right) {queue.enqueue(currentNode.right);}
                else {queue.enqueue('x');}
            } else {
                data.push('x');
            }
        }
        console.log(data);
        return data;
    }
}

const tree = new BinarySearchTree();

tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.lookup(170);
tree.bfs();
tree.dfs();
tree.dfs('pre-order');
tree.dfs('post-order');
tree.display();

