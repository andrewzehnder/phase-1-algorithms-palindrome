function isPalindrome(word) {
  let lengthOfWord = word.length;
  let isPalindrome;
  
  for(let i=0; i < word.length; i++) {
    let firstLetter = word.substr(i,1)
    let nextLetter = word.substr(lengthOfWord-(1+i), 1)
  
    if(firstLetter === nextLetter){
    isPalindrome = 'true'
    }
    else {
    isPalindrome = 'false'
    return false;
    }
  }

  if (isPalindrome === 'true'){
    return true;
  }

}


/*
Create a function with the inputted word.
Check the length of the word so you can compare the first and the last letters. Knowing where to stop the comparison. 
Compare the first letter and last letter to see if they match.
Loop through this for every letter.
If it's an odd length, no need to compare the last letter.
If every letter matches, return true.
If one set of comparisons fail, return false.
*/



/*
  The function needs to take in a word and needs to output whether the word is a palindrome. 
  If not, it needs to output false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));
}

module.exports = isPalindrome;
