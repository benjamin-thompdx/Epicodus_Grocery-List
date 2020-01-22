$(document).ready(function() {
  $("form").submit(function(event) {
    var groceryLists = [$('#protein').val(), $('#vegetable').val(), $('#starch').val(), $('#fruit').val()];
    console.log(groceryLists);

    var sortedList = groceryLists.sort();     
        
    sortedList.forEach(function(item) {
      $("ul#hide").append("<li>" + item.toUpperCase() + "</li>");
    })

    $("#hide").show();
    $("form").hide();
    event.preventDefault();
    
  });
});
