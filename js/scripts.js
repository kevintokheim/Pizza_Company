//Program Logic

//Constructs the Pizza object
function Pizza(quantity, size, topping, price){
    this.quantity = quantity;
    this.size = size;
    this.topping = topping;
    this.price = price;
};

//Method for returning the number of toppings
Pizza.prototype.pricePerTopping = function(){
    return this.topping * 1;
};

//Method for returning the quantity of pizzas.
Pizza.prototype.pricePerQuantity = function(){
    return this.quantity * 1;
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
    }

    this.price = (this.size + this.topping) * this.quantity;

    return this.price;
};

function resetFields() {
  $("input#quantity").val();
  $("input#size").val("");
  $("input.pizza-topping").val("");

}

$(document).ready(function(){

    $("form#new-pizza").submit(function(event){
        event.preventDefault;

        var inputtedQuantity = $("$input#quantity").val();
        var inputtedSize = $("$input#size").val().toLowerCase();

        //Gets the value from the multiple toppings inputs with the class ".pizza-topping"
        var inputtedToppings = $("#pizza-toppings .pizza-topping").each(function(){
            $(this).val();
        });

        var newPizza = new Pizza(inputtedQuantity, inputtedSize, inputtedToppings);

        $("ul#pizzas").append("<li><span class = 'pizza'>" + newPizza.quantity + newPizza.size + "</span></li>");
    });



















});
