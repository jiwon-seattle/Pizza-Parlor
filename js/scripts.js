$(document).ready(function() {
  $("#userOption").submit(function(event){
    event.preventDefault();
    $("input:checkbox[name=topping]:checked").each(function(){
      var toppingselected = $(this).val();
      topping.push(toppingselected)

    var size = $("input:radio[name=size]:checked").val();
    console.log(size)
    console.log(topping)

    var pizza = new Pizza(topping, size)

    })
  });

topping = []

function PizzaOrder(topping, size){
  this.pizza = []
  this.size = size
  this.cost = 0
}

function Pizza (topping, size) {
  cost = 10
  if (topping == "cheese") {
    cost += 5
  } else if (topping == "pepperoni") {
    cost += 6
  } else if (topping == "vegetable") {
    cost += 3
  } else if (topping == "artichoke") {
    cost += 7
  } return cost

  if (size == "XLarge") {
    cost += 5
  } else if (size == "large") {
    cost += 3
  } else if (size == "small") {
    cost -= 3
  } return cost
}

});
