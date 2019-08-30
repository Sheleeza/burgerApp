// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-Eatme").on("click", function(event) {
    var id = $(this).data("id");
    var newEat = $(this).data("newEat");

    var newBltEat = {
      Eatme: newEat
    };

    // Send the PUT request.
    $.ajax("/api/bugers/" + id, {
      type: "PUT",
      data: newBltEat
    }).then(
      function() {
        console.log("changed burger to", newEat);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBuger = {
      name: $("#ca").val().trim(),
      Eatme: $("[name=Eatme]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBuger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});

