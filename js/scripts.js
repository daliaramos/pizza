function Pizza(size, toppings) {
    this.size = size;
    this.toppings = toppings;

}

function chosenPizza() {
  var size = $("#size").val();
  var toppings = $("#toppings").val();
  var newCost = new Pizza(size, toppings);

  return newCost
}


Pizza.prototype.cost = function(){
  var cost =0;
 if (this.size === "small"){
  cost = 10;
  } else if (this.size === "medium"){
    cost = 20;
  } else {
    cost = 30;
  }
if (this.toppings === "")
  return cost
}
$(document).ready(function(){
  $("#pizza").submit(function(event){
    event.preventDefault();
    var answer = chosenPizza();

    $("#result").text("your total cost is" + answer.cost());
  });
});
