describe('Pizza', function(){
    it("creates a new pizza with the given specifications", function(){
        var testPizza = new Pizza(5, "large", 2, 15);
        expect(testPizza.quantity).to.equal(5);
        expect(testPizza.size).to.equal("large");
        expect(testPizza.topping).to.equal(2);
        expect(testPizza.price).to.equal(15);
    });

    it("returns the number toppings", function(){
        var testPizza = new Pizza(1, "small", 3, 1);
        expect(testPizza.numberOfToppings()).to.equal(3);
    });

    it("returns two pizzas", function(){
        var testPizza = new Pizza(2, "small", 1, 5);
        expect(testPizza.pizzaQuantity()).to.equal(2);
    });

    it("returns the price of a medium pizza", function(){
        var testPizza = new Pizza(1, "medium", 0, 0);
        expect(testPizza.pricePerSize()).to.equal(7.5);
    });

    it("returns the price of 2 small pizzas with one topping", function(){
        var testPizza = new Pizza(2, "small", 1, 0);
        expect(testPizza.pizzaPrice()).to.equal(12)
    });

    it("returns the price of 2 large pizzas with 2 toppings", function(){
        var testPizza = new Pizza(2, "large", 2, 0);
        expect(testPizza.pizzaPrice()).to.equal(24)
    });
});
