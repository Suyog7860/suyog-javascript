const name = "Suyog"
const repoCount = 10
// console.log(name + " github repository is " + repoCount); //not recommanded, outdated
console.log(`Hello my name is ${name} and my Github repository count is ${repoCount}`);

const gameName = new String('Ssgb');
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('g'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-2,3)
console.log(anotherString);





