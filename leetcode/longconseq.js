var longestConsecutive = function(nums) {
    if(nums.length<1) return 0 ;
    let maximum=1;
    let count=1;
    const sorted=nums.sort((a,b) => a-b);
    
    for(let i=0;i<sorted.length;i++){
        if(sorted[i] === sorted[i+1]) continue;

        if(sorted[i]===sorted[i+1]-1){
            count++;
            maximum=Math.max(count,maximum);
        }else{
            count=1;
        }
    }
    return maximum;



};

console.log(longestConsecutive([1,2,3,9,8,10,74,11,12]))