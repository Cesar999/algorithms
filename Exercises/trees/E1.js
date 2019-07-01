const Queue = require('../../datastructures/queue');

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(value){
        let newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while(true){
                if(value < current.value){
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if(value > current.value){
                    if(current.right === null){
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }    
        }
    }

    bfs(opt=true){
        let data = [];
        let queue = new Queue();
        let node = this.root;
        queue.enqueue(node);
        while(!queue.isEmpty()){
            node = queue.dequeue();
            if(node!==null){
                data.push(node.value);
                if(node.left){queue.enqueue(node.left);}
                else {queue.enqueue(null);}
                if(node.right){queue.enqueue(node.right);}
                else {queue.enqueue(null);}
            } else {
                data.push(null);
            }
        }
        if(opt){
            return data.slice(0,data.length/2);
        } else {
            return data;
        }
    }

    print(){
        let data = this.bfs(false);
        let n = 1;
        let old = 0;
        while(n<=data.length-1){
            let temp = data.slice(old,n);
            let total = data.length+1;
            let indent = total/temp.length;
            let str = '';
            let gap = '.';
            for (let v of temp){
                str = str+gap.repeat(indent/2-1)+v+gap.repeat(indent/2-1);
            }
            if(old===0){
                n = 3;
                old = 1
            } else {
                old = n;
                n = n*2+1
            }
            console.log(str);
      }
    }


}

const tree = new BinarySearchTree();
tree.root = new Node(18);
tree.insert(14);
tree.insert(12);
tree.insert(16);
tree.insert(22);
tree.insert(20);
tree.insert(24);
tree.insert(11);
tree.insert(13);
tree.insert(15);
tree.insert(17);
tree.insert(23);
tree.insert(25);
tree.insert(19);
tree.insert(21);
tree.print();

