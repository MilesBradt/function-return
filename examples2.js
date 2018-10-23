function wordToChar(something) {
  var newSomething = [];
  // calculation, with a for loop, if statement
  for (var i = 0; i < something.length; i++) {
    newSomething.push(something.charAt(i));
  }
  return newSomething;
}

// count numbers
$(document).ready(function() {
  $("#userInput").submit(function(event) {
    // collect user input
    var userInput = $("#input").val();
     // call function and save return value
     var result = wordToChar(userInput)

     $("#output").text(result);

     event.preventDefault();
  });
});
