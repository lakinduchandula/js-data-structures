// we can use arry as a stack

let letters = []; // this is the stack

let word = 'racecar';

let r_word = '';

// put the letters in word variable one by one to stack using "push" method
for(let i = 0; i < word.length; i++) {
    letters.push(word[i]);
}

// pop off the letters from the stack and put into the r_word
for(let i = 0; i < word.length; i++) {
    r_word += letters.pop();
}

// check the word is palindrome or not
if(word === r_word) {
    console.log('The word is palandrome!');
} 
else {
    console.log('The word is not palandrome');
}