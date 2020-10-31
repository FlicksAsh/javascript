// Write a function called "countWords".

// Given a string (words separated by spaces), "countWords" returns an object where each key is a word in the given string, with its value being how many times that word appeared in the given string. If given an empty string, your function should return an empty object.


function countWords(stringOfWords) {
    if (stringOfWords.length === 0) {
        return {};
    }   
    var arrayOfWords = stringOfWords.split(" ");
    var result = {};
    for (i = 0; i < arrayOfWords.length; i++) {
        var currentValue = arrayOfWords[i];
        if (result[currentValue] === undefined) {
            result[currentValue] = 1;
        } else { 
            result[currentValue] += 1;
        }
    }
    return result;
  }


var result1 = countWords('ask a bunch get a bunch');
console.log('should log "{ask: 1, a: 2, bunch: 2, get: 1}":', result1);

var result2 = countWords('');
console.log('should log "{}":', result2);