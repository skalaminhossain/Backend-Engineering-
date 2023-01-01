const mobilePhone = {
    vaberText : function(){
        return `Amar Mobile ${this.brand} er ${this.model}`
    }
}

console.log(mobilePhone);

const iPhone = {
    brand : "Apple",
    model : "i13promax"
}

console.log(mobilePhone.vaberText.call(iPhone));
