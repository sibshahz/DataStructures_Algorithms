//input is an array containing 

function mostExpensive(input){
    //create a variable to hold maximum value it should change
    let max=0;
    //regex pattern banao
    const reg= /^\d+$/;
    //sari array par move karo
    for(let i=0; i<input.length; i++){
        //har item ko check karo agar digit hai tou uski value compare karo

        if(reg.test(input[i])){
            max=Math.max(max,input[i]);
        }else{
            max=Math.max(max,input[i].length)
        }
        //agar digit nahi tou uski length compare karo        
    }
    //loop khatam
    return max;
    //sab se zyada wali value return karo
}

console.log(mostExpensive(["mangoes","apples3simpleitemsother", "apples","12"]))