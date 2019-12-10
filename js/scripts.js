// back-end logic: none;

// front-end logic:
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var userInput = [];
      userInput[0] = [$("input#animal").val()];
      userInput[1] = [$("input#food").val()];
      userInput[2] = [$("input#music").val()];
      userInput[3] = [$("input#sport").val()];
      userInput[4] = [$("input#game").val()];

    alert(userInput);
  });
});
