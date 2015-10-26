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
        console.log("This is Space Jam");
    }
    else
    {   
        doEverything();
        function doEverything(){
            var randomIndex = Math.floor(Math.random() * array.length);
            var testy = oldMessages.indexOf(randomIndex);
            console.log(testy);

            if (testy === -1)
            {
                oldMessages.push(randomIndex);
                console.log(array[randomIndex]);

            }
            else 
            {   
                if (array.length !== oldMessages.length)
                {
                    doEverything();                   
                }

            }
        }
        
    }
});

