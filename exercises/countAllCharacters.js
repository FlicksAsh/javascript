// Write a function called "countAllCharacters".

// Given a string of characters, "countAllCharacters" returns an object where each key is a character in the given string, with its value being how many times that character appeared in the given string. If given an empty string, your function should return an empty object.


function countAllCharacters(string) {
    if (string.length === 0) {
          return {};
      }   
      
      var result = {};
      for (i = 0; i < string.length; i++) {
          var currentValue = string[i];
          if (result[currentValue] === undefined) {
              result[currentValue] = 1;
          } else { 
              result[currentValue] += 1;
          }
      }
      return result;
  }

var result1 = countAllCharacters('banana');
console.log('should log "{b: 1, a: 3, n: 2}":', result1);

var result2 = countAllCharacters('');
console.log('should log "{}":', result2);