/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const ListNode={
  val:undefined,
  next:undefined,
}
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  if(list1.val === null && list2.val === null){
    return [];
  }else if(list1.val === null && list2.val !== null){
    return list2;

  }else if(list2.val === null && list1.vall !== null){
    return list1;
  }

  const answer= new ListNode;
  let p1=list1.val;
  let p2=list2.val;

  while(p1 !== undefined || p2 !== undefined){
    //iterate over lists to sort them
    let smaller=Math.min(p1,p2);
    let larger=Math.max(p1,p2);
    answer.push(smaller);
    answer.push(larger);
    p1=p1.next;
    p2=p2.next; 
  }
  return answer;
};

const list1=[1,2,4];
const list2=[1,3,4];
console.log(mergeTwoLists(list1,list2));

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]
 

// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.
