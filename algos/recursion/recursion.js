let counter=0;

function inception(){
  console.log(counter);
  if(counter > 3){
    return 'done!';
  }
  counter++;
  return inception();
}

inception();

// 1. Identify the base case 
// 2. Identify the recrusive case 
// 3. Get closer and closer and return when needed.