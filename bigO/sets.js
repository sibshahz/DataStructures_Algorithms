const text = "India";

const mySet = new Set(text); // Set(5) {'I', 'n', 'd', 'i', 'a'}
mySet.size; 
mySet.add({Firefox:"is great"})// 5

// case sensitive & duplicate omission
new Set("Firefox"); // Set(7) { "F", "i", "r", "e", "f", "o", "x" }
new Set("firefox"); // Set(6) { "f", "i", "r", "e", "o", "x" }

console.log(mySet)

// var gcdOfStrings = function(str1, str2) {
//     const secondArg=new Set(str2);
//     console.log(secondArg)
//     const st1 = Array.from(secondArg);
//     console.log(st1);

//     const secondArg2=new Set(str1);
//     console.log(secondArg2)
//     const st2 = Array.from(secondArg2);
//     console.log(st2);
//     if(JSON.stringify(st1) === JSON.stringify(st2)){
//         return st2.join("");
//     }
// };

var gcdOfStrings = function(str1, str2) {
    const secondArg=Array.from(new Set(str2));
    let str2Length=str2.length;
    let splittedString=str2.split("",(str2Length/2));
    while()
    console.log(splittedString)
    console.log(JSON.stringify(secondArg));
    if(str1.includes(secondArg.join(""))){
        return secondArg.join("");
    }else{
        return "";
    }
};

console.log(gcdOfStrings("ABABAB",
"ABAB"))

// console.log(gcdOfStrings("TAUXXTAUXXTAUXXTAUXXTAUXX",
// "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX"))
// "TAUXX"