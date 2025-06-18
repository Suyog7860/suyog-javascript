const name = "Suyog"
const repoCount = 10
// console.log(name + " github repository is " + repoCount); //not recommanded, outdated
console.log(`Hello my name is ${name} and my Github repository count is ${repoCount}`);

const gameName = new String('Ssgb');
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('g'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-2,3)
console.log(anotherString);


const newStringOne = " Suyog "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://google.com/suyog%30bhalerav"
console.log(url.replace('%30','-'));

console.log(url.includes('suyog'));

console.log(gameName.split('-'));
