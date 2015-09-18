//Program Logic

function Pizza(quantity, size, toppings, price){
    this.quantity = quantity;
    this.size = size;
    this.toppings = [];
    this.price = price;
};

function Topping(toppings){
    this.toppings = toppings;
}
    // var onePizza = 7;
    // var smallPizza = 7;
    var pizzaToppings = ["pepperoni", "black olives"];

Pizza.prototype.pricePerPizza = function(){
    return this.quantity * 5;
};

Pizza.prototype.pricePerSize = function(){
    if (this.size == "Small"){
        return 5;
    } else if (this.size == "Medium"){
        return 7.5;
    } else if (this.size == "Large"){
        return 10;
    } else {
        alert("That's a big pizza");
    }
};

Pizza.prototype.pricePerTopping = function(){
    for (var i = 0; i < pizzaToppings.length; i++){
        pizzaToppings[i] = 1;
        pizzaToppings[i+1] = 1+1;
    }
};

Pizza.prototype.pizzaPrice = function(){
    if (this.quantity == 2 && this.size == "Small") {
        return this.price = 10;
    } else {
        alert("I suck");
    }
};
