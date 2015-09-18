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
        expect(testPizza.pricePerTopping()).to.equal(3);
    });

    it("returns two pizzas", function(){
        var testPizza = new Pizza(2, "small", 1, 5);
        expect(testPizza.pricePerQuantity()).to.equal(2);
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
    })

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
