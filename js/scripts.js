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
 if (this.size === "small" || this.size === "medium"){
