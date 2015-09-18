//Program Logic

//Constructs the Pizza object
function Pizza(quantity, size, toppings, price){
    this.quantity = quantity;
    this.size = size;
    this.toppings = [];
    this.price = price;
};

//Constructs the Topping object
function Topping(toppings){
    this.toppings = toppings;
};

//Method for returning the price of one topping
Topping.prototype.pricePerTopping = function(){
    return this.toppings = 1;
};

//Method for returning the price per pizza.
//One pizza is 5 dollars
Pizza.prototype.pricePerPizza = function(){
    return this.quantity * 5;
};

//Method for returning the price per size of pizza
//Small pizza is 5, Medium is 7.5, Large is 10
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

//Method for returning to the total price of a pizza
//Including quantity, size and toppings
Pizza.prototype.pizzaPrice = function(){
    if (this.quantity == 2 && this.size == "Small") {
        return this.price = 10;
    } else {
        alert("I suck");
    }
};
