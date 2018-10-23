

// Word puzzle function
function counter(something) {
  var newSomething = [];
  // calculation, with a for loop, if statement
  for (var i = 0; i < something; i++) {
    newSomething.push(i);
  }
  return newSomething;
}

// count numbers
$(document).ready(function() {
  $("#userInput").submit(function(event) {
    // collect user input
    var userInput = $("#input").val();
     // call function and save return value
     var result = counter(userInput)

     $("#output").text(result);

     event.preventDefault();
  });
});
