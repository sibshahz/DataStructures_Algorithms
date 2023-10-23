
0/5
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const answer=new Map();
    let has=false;
    nums.forEach((item)=>{
        if(answer.has(item)){
            has=true;
        }else{
            answer.set(item);
        }
    });
    return has;

};

console.log(containsDuplicate([1,2,3,1]))
console.log(containsDuplicate([1,2,3,4]))