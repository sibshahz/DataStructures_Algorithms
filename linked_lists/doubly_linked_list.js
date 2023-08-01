//10->5->16

// let myinkedList={
//     head: { //it's a node
//         value: 10,
//         next: {
//             value:5,
//             next:{
//                 value:16,
//                 next:null
//             }
//         } 
//     }
// }
class Node {
    constructor(value){
        this.prev=null;
        this.value=value;
        this.next=null;
    }
}

class DoublyLinkedList{
    constructor(value){
        this.head={
            prev:null,
            value:value,
            next:null
        }
        this.tail =  this.head;
        this.length= 1;
    }
    traverseToIndex(index){
        let counter=0;
        let currentNode=this.head;
        while(counter !== index){
            currentNode=currentNode.next;
            counter++;
        }
        return currentNode;
    }
    append(value){
        const newNode=new Node(value);
        newNode.prev=this.tail;
        this.tail.next=newNode;
        this.tail=newNode;
        this.length++;
        return this;
    }
    prepend(value){
        // const newNode={
        //     value:value,
        //     next:null
        // } // old way
        const newNode=new Node(value);
        newNode.next=this.head;
        this.head.prev=newNode;
        this.head=newNode;
        this.length++;
        return this;
    }
    
    printList(){
        const array= [];
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value);
            currentNode=currentNode.next;
        }
        return array;
    }

    insert(index,value){
        if(index===0){
            this.prepend(value);
            return;
        }else if(index>=this.length){
            this.append(value);
            return;
        }

        const newNode=new Node(value);
        const leader=this.traverseToIndex(index-1);
        const follower=leader.next;
        leader.next=newNode;
        newNode.prev=leader;
        newNode.next=follower;
        follower.prev=newNode;
        this.length++;
        this.printList();

        // const newNode=new Node(value);
        // let currentNode=this.head;
        // let currentIteration=1;
        
        // while(currentIteration<=index){
        //     if(currentIteration===index){
        //         newNode.next=currentNode.next;
        //         currentNode.next=newNode;
        //         this.length++;
        //         return this;
        //     }
        //     currentNode=currentNode.next;
        //     currentIteration++;
        // } //my solution
    }

    remove(index){
        if(index>this.length || index <= 0){
            console.error("Please enter correct index to delete.");
            return;
        }else if(index === 1){
            this.head=this.head.next;
            this.head.prev=null;
            this.length--;
            this.printList();
            return;
        }else if(index === this.length){
            let previous=this.traverseToIndex(index-2);
            this.tail=previous;
            previous.next=null;
            this.length--;
            return;
        }else{
            let previous=this.traverseToIndex(index-1);
            let itemToDelete=previous.next;
            previous.next=itemToDelete.next;
            previous.prev=itemToDelete.prev;
            this.length--;
            this.printList();
            return;
        }
    }

    reverse(){
        
    }

}

const myLinkedList= new DoublyLinkedList(10);
myLinkedList.append(9);
myLinkedList.append(8);
myLinkedList.append(7);
myLinkedList.append(6);
myLinkedList.append(5);
myLinkedList.prepend(1);
console.log(myLinkedList);
console.log(myLinkedList.printList());
console.log(myLinkedList.length)
myLinkedList.insert(1,6);
console.log(myLinkedList.printList());
console.log(myLinkedList.length)
myLinkedList.remove(3);
console.log(myLinkedList.printList());
myLinkedList.remove(myLinkedList.length);
console.log(myLinkedList.printList());

