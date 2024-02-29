// get list of all 5 letter words
const allWords = require('./words');
// has these letters
const hasLetters = ['e','u','g']; 
// must not has these letters
const mustNotHaveLetters = ['a','d','i','n','s','b','l'];
// must have selected letters in these positions
const mustHaveLettersInPosition = [,,,'g','e']
// not in these positions
const mustNotHaveLettersInPosition = [,'u',,'u','u']

const filteredWords = allWords.filter(word => {
    return hasLetters.every(letter => word.includes(letter)) &&
        mustNotHaveLetters.every(letter => !word.includes(letter)) &&
        mustHaveLettersInPosition.every((letter, index) => word[index] === letter || letter === undefined) &&
        mustNotHaveLettersInPosition.every((letter, index) => word[index] !== letter || letter === undefined);
});

console.log(filteredWords);
console.log('possible words', filteredWords.length);