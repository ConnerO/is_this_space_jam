var oldMessages = [];

var array = ["No it's not Space Jam", 
"No it's not The Jam",
"Still not Space Jam",
"You wish this was Space Jam",
"If you think this movie is Space Jam, you clearly don't know Space Jam",
"This isn't Space Jam, therefore you are stupid"];
console.log("Alert are lames");


$("#submitter").click(function(){
  var userInput = $("#SpaceJam-checker").val();
  if (userInput === "Space Jam")
  {
    $("#answers").text("Yes. This is Space Jam.");
  }
  else if (userInput === "space jam")
  {
    $("#answers").text("space jam is like Space Jam right before S & J drank Michael's Secret Stuff and became big.");
  }
  else
  {   
    doEverything();
    function doEverything(){  
      var randomIndex = Math.floor(Math.random() * array.length);
      var testy = oldMessages.indexOf(randomIndex);

      if (testy === -1)
      {
        oldMessages.push(randomIndex);
        $("#answers").text(array[randomIndex]);

      }
      else 
      {   
        if (array.length !== oldMessages.length)
        {
          doEverything();                   
        }
        else 
        {
          oldMessages = [];
          doEverything();
        }

      }
    }

  }
});

