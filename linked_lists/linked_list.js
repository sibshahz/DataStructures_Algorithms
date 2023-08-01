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
        this.value=value;
        this.next=null;
    }
}

class LinkedList{
    constructor(value){
        this.head={
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
        const newNode=new Node(value)
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
        const holdingPointer=leader.next;
        leader.next=newNode;
        newNode.next=holdingPointer;
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
            this.length--;
            this.printList();
            return;
        }
    }

    reverse(){

        let next=null;
        let current=this.head;
        let prev=null;

        while(current){
            next=current.next;
            current.next=prev;
            prev=current
            current=next;
        }

        this.head=prev;

        // if(!this.head.next){
        //     return this.head;
        // }

        // let first=this.head;
        // this.tail=this.head;
        // let second=first.next;
        // //
        // while(second){
        //     const temp = second.next;//third element
        //     second.next=first;//16 -> 1
        //     first=second;// 1 -> 10
        //     second=temp;    // 10 -> 16

        // }
        // this.head.next=null;
        // this.head=first;
        // return this;

        // let prev = null;
        // let current = this.head;//1
        // let next = null;
        // //1 2 3
        // while (current) {
        //     next = current.next; //2 -> null
        //     current.next = prev; //1 -> 2
        //     prev = current; //1 -> 1
        //     current = next; //2 
        // }

        // this.head = prev;

    }

}

const myLinkedList= new LinkedList(1);
myLinkedList.reverse();
console.log(myLinkedList.printList());
myLinkedList.append(2);
myLinkedList.append(3);
console.log(myLinkedList.printList());
myLinkedList.append(5);
console.log(myLinkedList.printList());
myLinkedList.prepend(1);
myLinkedList.append(16);
myLinkedList.append(18);
myLinkedList.append(22);
myLinkedList.append(15);
myLinkedList.append(8);
console.log(myLinkedList.printList());
myLinkedList.insert(4,99);
myLinkedList.insert(1,125);
console.log(myLinkedList.printList());
myLinkedList.remove(1);
console.log(myLinkedList.printList());
console.log(myLinkedList.length)

myLinkedList.remove(myLinkedList.length);
console.log(myLinkedList.printList());

myLinkedList.remove(1);
console.log(myLinkedList.printList());
console.log(myLinkedList.length)

myLinkedList.remove(1);
console.log(myLinkedList.printList());

console.log(myLinkedList.length);
myLinkedList.reverse();
console.log(myLinkedList.printList());

// myLinkedList.append(5);
// console.log(myLinkedList.printList());
// myLinkedList.prepend(1);
// // myLinkedList.append(16);
// // myLinkedList.append(18);
// // myLinkedList.append(22);
// // myLinkedList.append(15);
// // myLinkedList.append(8);
// console.log(myLinkedList.printList());
// myLinkedList.insert(4,99);
// myLinkedList.insert(1,125);
// console.log(myLinkedList.printList());
// myLinkedList.remove(1);
// console.log(myLinkedList.printList());
// console.log(myLinkedList.length)

// myLinkedList.remove(myLinkedList.length);
// console.log(myLinkedList.printList());

// myLinkedList.remove(1);
// console.log(myLinkedList.printList());
// console.log(myLinkedList.length)

// myLinkedList.remove(1);
// console.log(myLinkedList.printList());

// console.log(myLinkedList.length)
