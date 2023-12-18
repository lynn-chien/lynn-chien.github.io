function averageThreeNumbers(a, b, c) {
    let sum = a + b + c;
    let avg = sum / 3;
    return avg;
}

function createSentence(num, noun) {
    return `On average, a Berkeley student has ${num} ${noun}s.`;
}

function getRandomNum(max) {
    return Math.floor(Math.random() * max);
}

let x = getRandomNum(10)
let y = getRandomNum(20);
let z = getRandomNum(30);

let avg = averageThreeNumbers(x, y, z);

let sentence = createSentence(avg, 'kitten')

console.log(sentence);