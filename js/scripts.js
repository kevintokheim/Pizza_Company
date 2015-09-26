//Program Logic

//Constructs the Pizza object
function Pizza(quantity, size, topping, price){
    this.quantity = quantity;
    this.size = size;
    this.toppings = topping;
    this.price = price;
};

//Method for returning the number of toppings
Pizza.prototype.numberOfToppings = function(){
    return this.toppings.length;
};

//Method for returning the quantity of pizzas.
Pizza.prototype.pizzaQuantity = function(){
    return this.quantity;
};

//Method for returning the price per size of pizza
//Small pizza is 5, Medium is 7.5, Large is 10
var pizzaSize = Pizza.prototype.pricePerSize = function(){
    if (this.size == "small"){
        return 5;
    } else if (this.size == "medium"){
        return 7.5;
    } else if (this.size == "large"){
        return 10;
    } else {
        alert("That's a big pizza");
    }
};

//Method for returning to the total price of a pizza
//Including quantity, size and toppings
Pizza.prototype.pizzaPrice = function(){
    if (this.size == "small"){
        this.size = 5;
    } else if (this.size == "medium"){
        this.size = 7.5;
    } else if (this.size == "large"){
        this.size = 10;
    } else {
        alert("That's a big pizza");
        this.size = 15;
    }


    //This function filters through this.toppings to search for whitespace in the array
    //the RegEx /\S/ searches for whitespace and 'filters' it from the array
    //This way, the user can add two toppings, and the computer will only return those toppings.
    var toppingsArray = this.toppings.filter(function(string){
        return /\S/.test(string);
    });

    //After filtering this.toppings, I call parseInt on the toppingsArray.length to return
    //the proper number of toppings 
    this.price = (parseInt(this.size) + parseInt(toppingsArray.length)) * parseInt(this.quantity);

    return this.price;
};

function resetFields() {
  $("input#quantity").val();
  $("input#size").val("");
  $("input.pizza-topping").val("");

};

$(document).ready(function(){

    $("form#new-pizza").submit(function(event){
        event.preventDefault();


        //number of pizzas
        var inputtedQuantity = $("input#quantity").val();

        //size of pizzas
        var inputtedSize = $("input#size").val().toLowerCase();

        //Gets the value from the multiple toppings inputs with the class ".pizza-topping"
        var inputtedToppings1 = $("#topping1").val();
        var inputtedToppings2 = $("#topping2").val();
        var inputtedToppings3 = $("#topping3").val();
        var inputtedToppings4 = $("#topping4").val();
        var inputtedToppings5 = $("#topping5").val();

        var toppings = [inputtedToppings1, inputtedToppings2, inputtedToppings3, inputtedToppings4, inputtedToppings5];

        var newPizza = new Pizza(inputtedQuantity, inputtedSize, toppings);
        //calculate price
        var finalPrice = newPizza.pizzaPrice();
        console.log(toppings.length);

        $("#finalorder").show();
          $(".pizza-quantity").text(newPizza.quantity);
          $(".pizza-size").text(inputtedSize);
          $(".pizza-topping").text(toppings.join());
          $(".pizza-price").text(newPizza.price);

      });
});
