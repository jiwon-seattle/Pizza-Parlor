$(document).ready(function() {
  $("#userOption").submit(function(event){
    event.preventDefault();
    $("input:checkbox[name=topping]:checked").each(function(){
      var toppingselected = $(this).val();
      topping.push(toppingselected)
    })

    var size = $("input:radio[name=size]:checked").val();
    console.log(size)
    console.log(topping)
    var cost = 10

    var pizzaOrder = new PizzaOrder(topping, size, cost)
    console.log(pizzaOrder)
    pizzaOrder.addOrder(cost)
    console.log(pizzaOrder.cost)

  });

topping = []

function PizzaOrder(topping, size, cost){
  this.topping = topping
  this.size = size
  this.cost = cost
}

PizzaOrder.prototype.addOrder = function(){
  for (var i = 0; i <this.topping.length; i++) {
  if (topping[i] == "cheese") {
    this.cost += 5
  } else if (this.topping[i] == "pepperoni") {
    this.cost += 6
  } else if (this.topping[i] == "vegetable") {
    this.cost += 3
  } else if (this.topping[i] == "artichoke") {
    this.cost += 7
  }
}

  if (this.size == "XLarge") {
    this.cost += 5
  } else if (this.size == "large") {
    this.cost += 3
  } else if (this.size == "small") {
    this.cost -= 3
  }
}

});
