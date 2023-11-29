const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
//                0    1   2  3  4  5  6   7   8    9  10
console.log("Numbers are unsorted",numbers);
function bubbleSort(array,operation) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) { 
      if(operation === "asc"){
        if(array[j] > array[j+1]) {
          //Swap the numbers
          let temp = array[j]
          array[j] = array[j+1];
          array[j+1] = temp;
        }
      }else{
        if(array[j] < array[j+1]) {
          //Swap the numbers
          let temp = array[j]
          array[j] = array[j+1];
          array[j+1] = temp;
        }
      }

    }        
  }
}

bubbleSort(numbers,"asc");
console.log("Numbers are sorted now: ",numbers);