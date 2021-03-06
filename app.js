/* 1) MAX CHAR

Given a string, return the character that is most
commonly used in the string.

--- Examples
    maxChar("abcccccccd") === "c"
    maxChar("apple 1231111") === "1"
*/


/* 2) ANAGRAMS

Check to see if two provided strings are anagrams of each other.
One string is an anagram of another if it uses the same characters
in the same quantity. Only consider characters, not spaces
or punctuation.  Consider capital letters to be the same as lower case

--- Examples
  anagrams('rail safety', 'fairy tales') --> True
  anagrams('RAIL! SAFETY!', 'fairy tales') --> True
  anagrams('Hi there', 'Bye there') --> False
*/
 function anagrams(str1,str2){
    for (let i = 0; i < str1.length; i++) {
        let set1= (str1.charAt(i));
         return set1;
         }for (let i = 0; i < str2.length; i++) {
        let set2= (str2.charAt(i));
        return set2;
      }
      if(set1===set2){
          return true;
      }else{

        return false;
      }
 }
console.log(anagrams('tarun','djfklj'))
/* 3) ANAGRAMS 2

Given a word and a list of possible anagrams, select the correct sublist.

--- Examples 

    "listen" and a list of candidates like "enlists" "google" "inlets" "banana" the program should return a list containing "inlets".
*/
// function anagram2(str) {
//     var chars = str.toLowerCase().split('');
  
//     return chars.sort(function(char1, char2) {
//       return char1 > char2;
//     }).join('')
//   }
  
//   function anagram1(sampleWord, candidates) {
//     return candidates.filter(function(currWord) {
//       if (sampleWord.toLowerCase() !== currWord.toLowerCase()) {
//         return sorted(sampleWord) === sorted(currWord);
//       }
//     }).sort()
//   }
/* 4) PALINDROME

Given a string, return true if the string is a palindrome
or false if it is not.  Palindromes are strings that
form the same word if it is reversed. Do include spaces
and punctuation in determining if the string is a palindrome.

--- Examples:

    palindrome("abba") === true
    palindrome("abcdefg") === false
 */
    function checkPalindrome(str) {

       
        const len = str.length;
    
        
        for (let i = 0; i < len / 2; i++) {
    
           
            if (str[i] !== str[len - 1 - i]) {
                return 'It is not a palindrome';
            }
        }
        return 'It is a palindrome';
    }
    console.log(checkPalindrome('tarun'))
/* 5) REVERSE INT

Given an integer, return an integer that is the reverse
ordering of numbers.

--- Examples

    reverseInt(15) === 51
    reverseInt(981) === 189
    reverseInt(500) === 5
    reverseInt(-15) === -51
    reverseInt(-90) === -9
 */
    function reverseInt(n) {
        const reversed = n.toString().split('').reverse().join(''); // turn a number into a string, then turn it into an array to reverse. 
        return Math.sign(n) * parseInt(reversed); // Math.sign will return -1 as for negative number, 1 as for position number, 0 as for zero.
      }
      console.log(reverseInt(56));
/* 6) STEPS

Write a function that accepts a positive number N.
The function should console log a step shape
with N levels using the # character.  Make sure the
step has spaces on the right hand side!

--- Examples

    steps(2)
        '# '
        '##'
    steps(3)
        '#  '
        '## '
        '###'
    steps(4)
        '#   '
        '##  '
        '### '
        '####' */

/* 7) REVERSE STRING

Given a string, return a new string with the reversed
order of characters

--- Examples

    reverse('apple') === 'leppa'
    reverse('hello') === 'olleh'
    reverse('Greetings!') === '!sgniteerG'
 */
    function reverseString(str) {
        return str.split("").reverse().join("");
    }
    console.log(reverseString("tarun"));
/* 8) CHUNK

Given an array and chunk size, divide the array into many subarrays
where each subarray is of length size

--- Examples

    chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
    chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
    chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
    chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
    chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
*/

/* 9) PYRAMID

Write a function that accepts a positive number N.
The function should console log a pyramid shape
with N levels using the # character.  Make sure the
pyramid has spaces on both the left and right hand sides

--- Examples

    pyramid(1)
        '#'
    pyramid(2)
        ' # '
        '###'
    pyramid(3)
        '  #  '
        ' ### '
        '#####' */

/* 10) SPYRAL MATRIX

Write a function that accepts an integer N
and returns a NxN spiral matrix.

--- Examples

    matrix(2)
        [[1, 2],
        [4, 3]]
    matrix(3)
        [[1, 2, 3],
        [8, 9, 4],
        [7, 6, 5]]
    matrix(4)
        [[1, 2, 3, 4],
        [12, 13, 14, 5],
        [11, 16, 15, 6],
        [10,  9,  8, 7]]

*/