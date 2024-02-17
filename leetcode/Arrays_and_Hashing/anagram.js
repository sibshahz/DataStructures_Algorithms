// var isAnagram = function(s, t) {
//     if(s.length!==t.length)
//         return false;
//     s=s.toLowerCase()
//     t=t.toLowerCase()
//     const arrS=new Array(26).fill(0);
//     const arrT=new Array(26).fill(0);
//     for(let i=0;i<s.length;i++)
//         arrS[s.charCodeAt(i)-97]+=1;
    
//     for(let i=0;i<t.length;i++)
//         arrT[t.charCodeAt(i)-97]+=1;
    
    
//     return JSON.stringify(arrS) === JSON.stringify(arrT);

// };

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // a=s
    // b=t
    // join one seet of a+b;
    // if length of set === a then you have anagram
    // otherwise you dont
    if(s.length !== t.length)
        return false;

    const objS={}
    const objT={}

    for(let i = 0; i< s.length; i ++){
        if(objS[s[i]]){
            objS[s[i]]=objS[s[i]]+1
        }else{
            objS[s[i]]=1;
        }
    }

    for(let i = 0; i< t.length; i ++){
        if(objT[t[i]]){
            objT[t[i]]=objT[t[i]]+1
        }else{
            objT[t[i]]=1;
        }
    }
    let anagram=true;
    Object.keys(objS).map((item) => {
        if(objS[item] !== objT[item])
            anagram=false;
    })
    return anagram;

};

console.log(isAnagram("anagram","nagaram"));
console.log(isAnagram("rat","car"));

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word
//  or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.
