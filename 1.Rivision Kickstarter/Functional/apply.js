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