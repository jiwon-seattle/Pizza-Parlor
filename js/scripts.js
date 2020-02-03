//User Interface logic
$(document).ready(function() {
  // $("input:radio[name=size]").click(function(event) {
  //   console.log("Radio Clicked!");
  // });
  $("#userOption").submit(function(event){
    event.preventDefault();
    $("input:checkbox[name=topping]:checked").each(function(){
      var toppingselected = $(this).val();
      topping.push(toppingselected)
    })

    var size = $("input:radio[name=size]:checked").val();
    var pizzaOrder = new PizzaOrder(topping, size, cost)

    pizzaOrder.addOrder()
    console.log(pizzaOrder.cost)

    $('#userOption').hide()
    $("#orderComplete").show()
    $('#pizzaDetail').text(pizzaOrder.topping)
    $("#sizeDetail").text(pizzaOrder.size)
    $("#costDetail").text(pizzaOrder.cost)
  });
//end of interface logic
var cost = 10 //basic
topping = []

function PizzaOrder(topping, size, cost){
  this.topping = topping
  this.size = size
  this.cost = cost
}

PizzaOrder.prototype.addOrder = function(){
  for (var i = 0; i <this.topping.length; i++) {
  if (topping[i] == "Cheese") {
    this.cost += 5
  } else if (this.topping[i] == "Pepperoni") {
    this.cost += 6
  } else if (this.topping[i] == "Meat") {
    this.cost += 3
  } else if (this.topping[i] == "Combination") {
    this.cost += 7
  }
}

  if (this.size == "XLarge") {
    this.cost += 5
  } else if (this.size == "Large") {
    this.cost += 3
  } else if (this.size == "Small") {
    this.cost -= 3
  }
}

});
