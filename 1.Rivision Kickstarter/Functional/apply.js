const mobilePhone = {
    vaberText : function(madeIN ,designin){
        return `Amar Mobile ${this.brand} er ${this.model} Made in ${madeIN} . Design by : ${designin}`
    }
}

console.log(mobilePhone);

const iPhone = {
    brand : "Apple",
    model : "i13promax"
}

console.log(mobilePhone.vaberText.apply(iPhone , ["Russia" , "UKRain"]));

let waterBottle = ["mum" , "pani"]
waterBottle.push('PranWater')
waterBottle.push.apply(waterBottle ,["AmazonWater" , "googleWater"])

console.log(waterBottle);

/// more example
const numbers = [10, 20, 30];
const max = Math.max.apply(null, numbers);
console.log(max);  


//
const person = {
    name: 'John',
    age: 30,
    greet: function(greeting) {
      console.log(`${greeting}, my name is ${this.name} and I am ${this.age} years old.`);
    }
  };
  
  console.log(person.greet.apply(person, ['Hello']))

  console.log(person.greet());
