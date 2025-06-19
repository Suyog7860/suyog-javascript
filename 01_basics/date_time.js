// dates

let myDate = new Date()
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

// let MycreatedDate = new Date (2025, 5, 19)
// console.log(MycreatedDate.toDateString());

let myCreatedDate = new Date (2025, 5, 19, 6, 10)
// console.log(mycreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());

//  `${newDate.getDay()} and the time`

newDate.toLocaleString(
    'default',{
        weekday: "long"
    }
)
