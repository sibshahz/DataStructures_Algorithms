/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    // const answer=[];
    // for(let i=0;i<nums.length;i++){
    //     for(let j=1;j<nums.length;j++){
    //         if(nums[i]+nums[j]==target){
    //             if(answer.includes(j) || answer.includes(i)){
    //                 continue;
    //             }
    //             if(!(answer.includes(j) && answer.includes(i))){
    //                 answer[0]=i;
    //                 answer[1]=j;
    //                 return answer;
    //             }

    //         }
    //     }
    // }
    // return answer;
    for(i=0;i<nums.length;i++){
        for(j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]===target){
                let output = [i,j];
                return output;
            }
        }
    }
};

console.log(twoSum([2,7,11,15],9))
console.log(twoSum([3,3],6))
console.log(twoSum([3,2,4],6))