let myName = "Sk Al Alamin Hossain"
console.log(myName);

let alive =  "I live in 'Bangladesh'"
console.log(alive);

// //loop Through String

const myCountry = alive
for(let i = 0 ; i<myCountry.length ; i++) {
    console.log(myCountry[i]);
}

//Length Calculation

let city = "Dhaka"
let len = 0 
let index = 0 
while (city[index] !== undefined) {
    len+=1
    index++
}

console.log(`Length of String :  ${len}`);