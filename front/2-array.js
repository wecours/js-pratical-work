let score = [4, 6, 33, 8, 9];
score.push(1);
console.log(score);
score.pop();
console.log(score);
score.unshift(2);
console.log(score)
score.shift();
console.log(score);
score.shift();
console.log(score);
score.splice(2, 0, 2);
console.log(score);
score.splice(2, 2, 55);
console.log(score);
score.splice(1, 1);
console.log(score);