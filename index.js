function isPalindrome(word) {
  const wordValue = word.split('');
  const reverseWordValue = wordValue.reverse();
  const reverseWord = reverseWordValue.join('');
  if (word === reverseWord) {
    return true
  }
  else {
    return false
  }
}
isPalindrome("abba")


/* 
  Add your pseudocode here
  create an array from the input string
reverse the array
create a string from the reversed array
return the reversed string
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
