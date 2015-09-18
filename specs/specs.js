describe('Pizza', function(){
    it("creates a new pizza with the given specifications", function(){
        var testPizza = new Pizza(5, "Large", [], 15);
        expect(testPizza.quantity).to.equal(5);
        expect(testPizza.size).to.equal("Large");
        expect(testPizza.toppings).to.eql([]);
        expect(testPizza.price).to.equal(15);
    });

    it("returns the price of two pizzas", function(){
        var testPizza = new Pizza(2, "Small", [], 5);
        expect(testPizza.pricePerPizza()).to.equal(10);
    });

    it("returns the price of a medium pizza", function(){
        var testPizza = new Pizza(1, "Medium", [], 0);
        expect(testPizza.pricePerSize()).to.equal(7.5);
    });

    it("returns the price of pepperoni and black olive toppings", function(){
        var testPizza = new Pizza(1, "Small", ["pepperoni", "black olives"], 0);
        expect(testPizza.pricePerTopping()).to.eql(2);
    })

    it("returns the price of 2 small plain pizzas", function(){
        var testPizza = new Pizza(2, "Small", [], 10);
        expect(testPizza.pizzaPrice()).to.equal(10)
    });
    // it("returns the price of a small pepperoni pizza", function(){
    //     var testPizza = new Pizza(1, "Small");
    //     expect(testPizza.quantity).to.equal(1);
    //     expect(testPizza.size).to.equal("Small");
    //     expect(testPizza.toppings("pepperoni")).to.eql(["pepperoni"]);
    // });
});
