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
  myFacebookLogin();
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
    console.log('statusChangeCallback');
    console.log(response);
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
      var message = $("#SpaceJam-checker").val();
      console.log("Message is ",message);
      FB.login(function()
      {
        FB.api('/me/feed', 'post', {message: "I thought that " + message + " was Space Jam. Thank god for 'Is This Space Jam'. Now I know it's not."});
      }, 
      {scope: 'publish_actions, user_likes, user_photos'});
    }
    function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }
  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
      'Thanks for logging in, ' + response.name + '!';
    });
   
  }
