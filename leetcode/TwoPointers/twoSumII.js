
var twoSum = function(numbers, target) {
  const answer={};
  for(let i=0;i<numbers.length;i++){
      let value=target-numbers[i];
      console.log("Value: ",value);
      if(value in answer){
          return [answer[value]+1,i+1];
      }else{
          answer[numbers[i]]=i;
          console.log("Answer: ", answer)
      }
  }  
};

// console.log(twoSum([2,7,11,15],9))
console.log(twoSum([2,3,4],6))