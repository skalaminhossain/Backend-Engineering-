const smartPhone = {
    brand : "Apple",
    model : "13 pro max",
    price : "1.3 Lakh",
    makeCall : function (phoneNumber) {
        console.log(phoneNumber);
    },
    "make-year" : 2022,
    users : ["mahidul" , "alamin" , "bakibillah"],
    lastBuy : {
        shop : "Savar City Center",
        date : "3rd April 2022"
    }

}

// console.log(smartPhone);
// console.log(smartPhone.brand);
// smartPhone.makeCall(453646)
// console.log(smartPhone.users);



function SmartPhone(brand , model , makeYear){
    this.brand = brand
    this.model = model,
    this.makeYear = makeYear
    this.makeCall = function (phoneNumber){
        console.log(phoneNumber);
    }
    this.isGood = function(){
        return `Your ${this.brand} is Very Good`
    }
}

const alaminPhone = new SmartPhone("Oppo", "a15s" , 2020)
console.log(alaminPhone);
alaminPhone.makeCall(546475)
console.log(alaminPhone.isGood());

const nazmulPhone = new SmartPhone("IPhone" , "13 pro max" , 2022)
nazmulPhone.makeCall(435353)
console.log(nazmulPhone);