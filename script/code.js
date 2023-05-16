let subject = ["Python", "C++", "VB.Net", "Javascript", "Assembly"]
let place = subject.length / 2;

//display
console.log(subject.at(4));

let x = Math.floor(place);

console.log(x % 2 == 0 ? subject[x] : subject.slice(x+1, x-1) );