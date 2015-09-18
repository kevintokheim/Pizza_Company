//Program Logic

//Constructs the Pizza object
function Pizza(quantity, size, topping, price){
    this.quantity = quantity;
    this.size = size;
    this.topping = topping;
    this.price = price;
};

//Method for returning the price of a topping
//One topping is worth 1 dollar
Pizza.prototype.pricePerTopping = function(){
    return this.topping = 1;
};
// //Constructs the Topping object
// function Topping(toppings){
//     this.toppings = toppings;
// };
//
// //Method for returning the price of one topping
// Topping.prototype.pricePerTopping = function(){
//     return this.toppings = 1;
// };

//Method for returning the price per pizza.
//One pizza is 5 dollars
Pizza.prototype.pricePerQuantity = function(){
    return this.quantity * 1;
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
    this.price = (Pizza.pricePerSize + Pizza.pricePerTopping) * Pizza.pricePerQuantity;
    console.log(this.price);
    return this.price;
};
