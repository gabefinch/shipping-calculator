$(document).ready(function(){
  $("form#shipinfo").submit(function(event){
  event.preventDefault();

  var itemName = $("input#item_name").val();
  var itemWeight = $("input#item_weight").val();
  var destination = $("input#destination").val();
  var newPackage = { itemName: itemName, itemWeight: itemWeight, destination: destination,
                      price: price = function(){
                          return (this.itemWeight * 0.45).toFixed(2);
                      }
    };

    $("ul#new_packages").append("<li>" + "Shipping cost: " + newPackage.itemName + " " + "$" + newPackage.price() + "</li>")
    $('#results').show();
    var itemName = $("input#item_name").val("");
    var itemWeight = $("input#item_weight").val("");
    var destination = $("input#destination").val("");
  });
});
