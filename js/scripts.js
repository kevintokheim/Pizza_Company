//Program Logic

//Constructs the Pizza object
function Pizza(quantity, size, topping, price){
    this.quantity = quantity;
    this.size = size;
    this.topping = topping;
    this.price = price;
};

//Method for returning the number of toppings
//One topping is worth 1 dollar
Pizza.prototype.pricePerTopping = function(){
    return this.topping * 1;
    // return this.topping = 1;
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
    if (this.size == "Small"){
        this.size = 5;
    } else if (this.size == "Medium"){
        this.size = 7.5;
    } else if (this.size == "Large"){
        this.size = 10;
    } else {
        alert("That's a big pizza");
    }

    // this.topping = 1;

    this.price = (this.size + this.topping) * this.quantity;
    console.log(this.size);
    return this.price;
};
