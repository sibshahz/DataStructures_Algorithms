function factorialRecursive(number){
  if(number===2){
    return 2;
  }
  return number*factorialRecursive(number-1);
  
}
console.log(factorialRecursive(5))

function factorialIterative(number){
  let result=1;
  if(number===2){
    return 2;
  }
  for(let i=2;i<=number;i++){
    result=result*i;
  }
  return result;
}
console.log(factorialIterative(5));