// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".devour").on("click", function(event) {
    var id = $(this).data("id"); 
    var newState = {
      devoured: true
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newState
    }).then(
      function() {      
      location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#addnewburger").val().trim(), 
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger + newBurger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
})
