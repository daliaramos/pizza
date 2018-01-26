function Pizza(size, toppings) {
    this.size = size;
    this.toppings = toppings;

}

function pizzaCost() {
  var size = $("#size").val();
  var toppings = $("#toppings").val();
  var newCost = new Pizza(size, toppings);

  return newCost
}


Pizza.prototype.Cost = function(){
  var cost =0;
 if (this.size === "small" || this.toppings === "cheese" || this.toppings === "peperoni"){
  cost = 10;
  }

  if (this.size === "medium" ||this.size === "large" ||this.size === "extraLarge" ||this.toppings === "artichoke" || this.toppings === "anchovy"){
  cost = 30;
