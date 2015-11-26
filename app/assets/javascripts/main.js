var oldMessages = [];

var array = ["No it's not Space Jam",
"No it's not The Jam",
"Still not Space Jam",
"You wish this was Space Jam",
"If you think this movie is Space Jam, you clearly don't know Space Jam",
"This isn't Space Jam, therefore you are stupid"];
console.log("Alert are lames");
name = "";
// testResponse = 0;

$("#submitter").click(function(){
  FB.getLoginStatus(function(response)
  {
    if(response === "unknown")
    {
      $("#status").text("You NEEEEEEEED to sign in first bro");
    }
    else if (response === "connected")
    {
      var userInput = $("#SpaceJam-checker").val();
      myFacebookLogin();
    }
    else
    {
      console.log("The response is ",response);
    }
  });
});

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

window.fbAsyncInit = function() {
  FB.init({
    appId      : '169745636704881',
    xfbml      : true,
    version    : 'v2.4'
  });
};

(function(d, s, id){
 var js, fjs = d.getElementsByTagName(s)[0];
 if (d.getElementById(id)) {return;}
 js = d.createElement(s); js.id = id;
 js.src = "https://connect.facebook.net/en_US/sdk.js";
 fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function statusChangeCallback(response) {
  console.log('statusChangeCallback ',response);
  testResponse = response;
  if (response.status === 'connected') {
    testAPI();
  } else if (response.status === 'not_authorized') {
    document.getElementById('status').innerHTML = 'Please log ' +
    'into this app.';
  } else {
    document.getElementById('status').innerHTML = 'Please log ' +
    'into Facebook.';
  }
}

function myFacebookLogin()
{
  var userInput = $("#SpaceJam-checker").val();

  if (userInput === "Space Jam" || userInput === "space jam")
  {
    if (userInput === "space jam")
    {
      $("#answers").text("space jam is like Space Jam right before S & J drank Michael's Secret Stuff and became big.");
    }
    else
    {
      $("#answers").text("Yes. This is the Space Jam.");
    }
    console.log("Message is ",userInput);
    var message = "I was correct! " + userInput + " is indeed Space Jam. Thank god for 'Is This Space Jam'!";
  }
  else
  {
    doEverything();
    var message = "I thought that " + userInput + " was Space Jam. Thank god for 'Is This Space Jam'. Now I know it's not.";
  }
  FB.login(function(){
      FB.api('/me/feed', 'post', {message: message});
  },
    {scope: 'publish_actions, user_likes, user_photos'});
}

function checkLoginState()
{
  FB.getLoginStatus(function(response)
  {
    checkLogResponse = response;
    console.log("The response of checkLoginState is ",response);
    statusChangeCallback(response);st
  });
}

function testAPI() {
  FB.api('/me', function(response) {
    name = response.name;
    console.log('Successful login for: ' + response.name);
    document.getElementById('status').innerHTML = 'Thanks for logging in, ' + response.name + '!';
  });
}
