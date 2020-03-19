let name = prompt('Hello! What is your name?');

while (name == '' || name == null ) {
    name = prompt('Hello! What is your name?')
}

alert(name + ', I guessed a number from 1 to 100. Try to guess it in the least number of attempts. After each attempt, I will say "little", "many" or "guessed"');

let number = Math.ceil(Math.random() * 100);
let guess = prompt('What number did i make?');
let numberOfGuess = 0;

while (guess != number) {
    if (guess > number) {
        guess = prompt('A lot. Try again');
        numberOfGuess = numberOfGuess + 1;
    }
    if (guess < number) {
        guess = prompt('Little. Try again');
        numberOfGuess = numberOfGuess + 1;
    }
}

alert('You guessed! That number ' + number + '. You needed ' + numberOfGuess + ' attempts.');
