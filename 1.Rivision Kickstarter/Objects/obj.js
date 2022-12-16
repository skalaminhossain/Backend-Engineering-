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

console.log(smartPhone);
console.log(smartPhone.brand);
smartPhone.makeCall(453646)
console.log(smartPhone.users);