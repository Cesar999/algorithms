const Queue = require('./queue');

class Node {
    constructor(data, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor(){
        this.root = null;
    }

    insert(data){
        const node = this.root;
        if(node === null){
            this.root = new Node(data);
            return;
        } else {
            const searchTree = function (node){
                if(data < node.data){
                    if(node.left === null){
                        node.left = new Node(data);
                        return;
                    } else {
                        return searchTree(node.left);
                    }
                } else if(data > node.data){
                    if(node.right === null){
                        node.right = new Node(data);
                        return;
                    } else {
                        return searchTree(node.right)
                    }
                } else {
                    return null;
                }
            }
            return searchTree(node);
        }
    }

    dfs(opt='inOrder'){
        const data = [];
        function traverse(node){
            if(opt==='preOrder'){
                data.push(node.data);
                if(node.left){traverse(node.left);}
                if(node.right){traverse(node.right);}
            } else if(opt==='postOrder'){
                if(node.left){traverse(node.left);}
                if(node.right){traverse(node.right);}
                data.push(node.data);
            } else {
                if(node.left){traverse(node.left);}
                data.push(node.data);
                if(node.right){traverse(node.right);} 
            }
        }
        traverse(this.root);
        return data;
    }

    bfs(opt=true){
        let data = [];
        let queue = new Queue();
        let node = this.root;
        queue.enqueue(node);
        while(!queue.isEmpty()){
            node = queue.dequeue();
            if(node!==null){
                data.push(node.data);
                if(node.left){queue.enqueue(node.left);}
                else {queue.enqueue(null);}
                if(node.right){queue.enqueue(node.right);}
                else {queue.enqueue(null);}
            } else {
                data.push(null);
            }
        }
        if(opt){
            return data.filter((item)=>item!==null);
        } else {
            let i=0;
            let temp;
            while(i<data.length){
                if(data[i]!==null){
                    temp = i;
                }
                i++;
            }
            let flag = Math.ceil(Math.log2(temp+2));
            let pow = Math.pow(2,flag)-1;
            if(pow>data.length){
                let count = data.length
                while(pow>count){
                    data.push(null);
                    count++;
                }
            }
            let result = data.slice(0,pow);

            return result;
        }
    }

    print(){
        let data = this.bfs(false);

        //caclulate the length of the max digit AKA. largest str number
        const max = Math.max(...data); 
        const digits = Math.ceil(Math.log10(max));

        let n = 1; // start at 1 to use the equation 2*n to move to child
        let old = 0; // previous value of n
        let end = Math.ceil(Math.log2(data.length+1));
        let count = 0;
        let gap = '.';
        end++;
        while(count<end){
            let temp = data.slice(old,n);
            let total = Math.pow(2,end);
            let indent = total/temp.length;
            let str = '';
            for (let v of temp){
                let aux;
                if(v !== null){
                    aux = Math.ceil(Math.log10(v));
                } else {
                    v ='*'.repeat(digits);
                    aux = digits;
                }
                
                if(aux<digits){
                    while(aux<digits){
                         v = v+' ';
                         aux++;
                    }
                }

                str = str+gap.repeat(indent/2-1)+v+gap.repeat(indent/2-1);
            }
            console.log(str);
            old = n;
            n = n*2+1;
            count++;
        }
    }

    findMin() {
        let current = this.root;
        while (current.left !== null) {
          current = current.left;
        }
        console.log(`Min: ${current.data}`);
        return current.data;
      }

    findMax() {
        let current = this.root;
        while (current.right !== null) {
          current = current.right;
        }
        console.log(`Max: ${current.data}`);
        return current.data;
    }

    find(data) {
        let current = this.root;
        while (current.data !== data) {
          if (data < current.data) {
            current = current.left;
          } else {
            current = current.right;
          }
          if (current === null) {
            console.log(`Not found: ${current.data}`);
            return null;
          }
        }
        console.log(`Found: ${current.data}`);
        return current;
    }

    findMaxHeight(node = this.root) {
        if (node == null) {
            return 0;
        };
        let left = this.findMaxHeight(node.left);
        let right = this.findMaxHeight(node.right);
        if (left > right) {
            return left + 1;
        } else {
            return right + 1;
        };
    }

    findMinHeight(node = this.root) {
        if (node == null) {
            return 0;
        };
        let left = this.findMinHeight(node.left);
        let right = this.findMinHeight(node.right);
        if (left < right) {
            return left + 1;
        } else {
            return right + 1;
        };
    }

    isBalanced() {
        return (this.findMinHeight() >= this.findMaxHeight() - 1)
    }

    remove(data) {
        const removeNode = function(node, data) {
            if (node == null) {
                return null;
            }
            if (data == node.data) {
                // node has no children 
                if (node.left == null && node.right == null) {
                    return null;
                }
                // node has no left child 
                if (node.left == null) {
                    return node.right;
                }
                // node has no right child 
                if (node.right == null) {
                    return node.left;
                }
                // node has two children 
                var tempNode = node.right;
                while (tempNode.left !== null) {
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;
            } else if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            } else {
                node.right = removeNode(node.right, data);
                return node;
            }
        }
        this.root = removeNode(this.root, data);
      }    
}

const bst = new BST();
bst.insert(50);
bst.insert(17);
bst.insert(72);
bst.insert(12);
bst.insert(23);
bst.insert(54);
bst.insert(76);
bst.insert(9);
bst.insert(14);
bst.insert(19);
bst.insert(67);
bst.findMin();
bst.findMax();
bst.find(67);
console.log(bst.findMaxHeight(),'Max Height');
console.log(bst.findMinHeight(),'Min Height');
console.log(bst.isBalanced(), 'Balanced');
console.log(bst.bfs(),'bfs');
console.log(bst.dfs('preOrder'),'preOrder dfs');
console.log(bst.dfs('postOrder'),'postOrder dfs');
console.log(bst.dfs('inOrder'),'inOrder dfs');
bst.print();
// bst.remove(17);
// bst.print();