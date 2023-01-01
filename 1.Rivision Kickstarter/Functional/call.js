const mobilePhone = {
    vaberText : function(madeIN , designin){
        return `Amar Mobile ${this.brand} er ${this.model} Made in ${madeIN} . Design by : ${designin}`
    }
}

console.log(mobilePhone);

const iPhone = {
    brand : "Apple",
    model : "i13promax"
}

console.log(mobilePhone.vaberText.call(iPhone , "Gulisthan" , "SKTECH"));


//
const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    startEngine: function() {
      console.log(`Starting engine of ${this.year} ${this.make} ${this.model}`);
    }
  };
  
  car.startEngine();
  car.startEngine.call(car)