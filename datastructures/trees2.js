const Queue = require('./queue');

class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(val){
        this.root = new Node(val);
    }

    insert(val){
        const newNode = new Node(val);
        
        if(this.root === null){
            this.root = newNode;
            return this;
        } 
            
        let current = this.root;
        while(true){
            if(val < current.val){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                } else {
                    current = current.left;
                }
            } else if(val > current.val){
                if(current.right ===null){
                    current.right = newNode;
                    return this;
                } else {
                    current = current.right;
                }
            }
        }
    }

    
    find(val){
        if(this.root === null){
            return null;
        }

        let current = this.root;
        let found = false;
        while(current && !found){
            if(val>current.val){
                current = current.right;
            } else if(val<current.val){
                current = current.left;
            } else {
                found = true;
            }
        }

        return found;
    }

    bfs(){
        let data = [];
        let queue = new Queue();
        let current = this.root;
        queue.enqueue(current);
        while(!queue.isEmpty()){
            current = queue.dequeue();
            if(current!=null){
                data.push(current.val);

                if(current.left){
                    queue.enqueue(current.left);
                } else{
                    queue.enqueue(null);
                }

                if(current.right){
                    queue.enqueue(current.right);
                } else {
                    queue.enqueue(null);
                }
            } else {
               //data.push(null);
            }
        }
        console.log(data, 'BFS');
        return data;
    }

    dfs_inorder(){
        const data = [];
        function traverse(node){
            if(node.left){
                traverse(node.left);
            }
            data.push(node.val);
            if(node.right){
                traverse(node.right);
            }
        }
        traverse(this.root);
        console.log(data, 'DFS inorder');
        return data;
    }

    dfs_preorder(){
        const data = [];
        function traverse(node){
            data.push(node.val);
            if(node.left){
                traverse(node.left);
            }
            if(node.right){
                traverse(node.right);
            }
        }
        traverse(this.root);
        console.log(data, 'DFS prorder');
        return data;
    }

    dfs_postorder(){
        const data = [];
        function traverse(node){
            if(node.left){
                traverse(node.left);
            }
            if(node.right){
                traverse(node.right);
            }
            data.push(node.val);
        }
        traverse(this.root);
        console.log(data, 'DFS postorder');
        return data;
    }

    print(){
        const data = this.bfs();
        let n = 1;
        let old = 0;
        while(n<=data.length){
            let temp = data.slice(old,n);
            //-----
            let total = data.length+1;
            let indent = total*2/temp.length;
            let str = '';
            let gap = '.';
            for (let v of temp){
                str = str+gap.repeat((indent/2)-1)+v+gap.repeat((indent/2)-1);
            }
            //---
            old = n;
            n = n*2+1;

            console.log(str);
        }

    }

}

const tree = new BinarySearchTree(18);
tree.insert(14);
tree.insert(12);
tree.insert(16);
tree.insert(22);
tree.insert(20);
tree.insert(24);
tree.bfs();
tree.dfs_inorder();
tree.dfs_postorder();
tree.dfs_preorder();
tree.print();