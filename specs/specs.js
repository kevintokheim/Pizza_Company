describe('Pizza', function(){
    it("creates a new pizza with the given specifications", function(){
        var testPizza = new Pizza(5, "Large", "pepperoni", 15);
        expect(testPizza.quantity).to.equal(5);
        expect(testPizza.size).to.equal("Large");
        expect(testPizza.topping).to.equal("pepperoni");
        expect(testPizza.price).to.equal(15);
    });

    it("returns two pizzas", function(){
        var testPizza = new Pizza(2, "Small", "pepperoni", 5);
        expect(testPizza.pricePerQuantity()).to.equal(2);
    });

    it("returns the price of a medium pizza", function(){
        var testPizza = new Pizza(1, "Medium", [], 0);
        expect(testPizza.pricePerSize()).to.equal(7.5);
    });

    it("returns the price of a topping", function(){
        var testPizza = new Pizza(1, "Small", "pepperoni", 1);
        expect(testPizza.pricePerTopping()).to.equal(1);
    });

    it("returns the price of 2 small pizzas with pepperoni", function(){
        var testPizza = new Pizza(2, "Small", "pepperoni", 0);
        expect(testPizza.pizzaPrice()).to.equal(12)
    });


    // it("returns the price of a small pepperoni pizza", function(){
    //     var testPizza = new Pizza(1, "Small");
    //     expect(testPizza.quantity).to.equal(1);
    //     expect(testPizza.size).to.equal("Small");
    //     expect(testPizza.toppings("pepperoni")).to.eql(["pepperoni"]);
    // });
});

// describe('Topping', function(){
//     it("creates a new topping with the given specifications", function(){
//         var testTopping = new Topping("pepperoni");
//         var testTopping2 = new Topping("black olives");
//         expect(testTopping.toppings).to.equal("pepperoni");
//         expect(testTopping2.toppings).to.equal("black olives");
//     });
//
//     it("returns the price of one topping", function(){
//         var testTopping = new Topping("pepperoni");
//         expect(testTopping.pricePerTopping()).to.equal(1);
//     });
// });
