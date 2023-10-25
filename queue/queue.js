class Node {
  constructor(value){
      this.value=value;
      this.next=null;
  }
}

class Queue{
  constructor(value){
      this.head={
          value:value,
          next:null
      }
      this.tail =  this.head;
      this.length= 1;
  }
  _insert(value){
    let newNode=new Node(value);
    this.head=newNode;
    this.tail=newNode;
    this.length++;
  }

  enque(value){
    if(this.length===0){
      return this._insert(value)
    }else{
      let newNode = new Node(value);
      this.tail.next=newNode;
      this.tail=newNode;
      this.length++;      
    }
  }

  deque(){
    this.head=this.head.next;
    this.length--;
  }

  peek(){
    return this.head.value;
  }

  traverse(){
    //create an empty array
    //traverse on Queue nodes
    //insert value of each node into array created earlier
    //return array
  }
}

const myQue=new Queue("Hamza");
myQue.enque("Junaid");
myQue.enque("Ashraf");
myQue.enque("Zahid");
// console.log(myQue.peek());
myQue.deque();
myQue.deque();
console.log(myQue.peek());


