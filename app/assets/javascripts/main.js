console.log("Alert are still lames");
console.log("new test bro");
var loggedIn = false;
var replies = [];
var current_replies = [];
$.ajax({
  url: "/replies",
  success: function(jamReplies){
    console.log("Replied so hard mang!", jamReplies);
    replies = jamReplies.poo.slice();
    current_replies = jamReplies.poo.slice();
  }
});

function random(){
  var randomIndex = Math.floor(Math.random() * current_replies.length);
  var randomReply = current_replies[randomIndex];
  var currentIndex = current_replies.indexOf(randomReply);
  current_replies.splice(currentIndex, 1);
  if (current_replies.length === 0)
  {
    current_replies = replies.slice();
  }
  console.log(current_replies, current_replies.length);
  return randomReply;
}

$("#submitter").click(function(){
  var currentMovie = $("#SpaceJam-checker").val();
  $.ajax({url:"/calculate",
    data: {currentMovie: currentMovie},
    success: function(response){
      var isItSpaceJam = response.is_spacejam
      var congratsMessage = "Congrats, it's Space Jam!! Lucky you!";
      var spacejamReply = isItSpaceJam ? congratsMessage : random();
      $("#answers").text(spacejamReply);
      facebookStuff(currentMovie, isItSpaceJam);
    }
  });
  console.log("This has been clicked, you bitch");
});
function facebookStuff(movie, isItSpaceJam){
  FB.getLoginStatus(function(response)
  {
    console.log("checking facebook status yoh");
    resStatus = response.status;
    if (resStatus === "connected")
    {
      postFbMessage(movie, isItSpaceJam);
    }
    else
    {
      $("#status").text("You NEEEEEEEED to sign in first bro");
    }
  });
}

function postFbMessage(movie, isItSpaceJam){
  var firstMessage = `I thought ${movie} was Space Jam. Now I know`;
  var middleMessage = isItSpaceJam ? " it is." : " it's not."
  var lastMessage = "Thank goodness for Is This Space Jam";
  var message = `${firstMessage}${middleMessage}${lastMessage}`;
  FB.api('/me/feed', 'post', {message: message});
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

$("#fbLoginButton").click(function() {
  FB.login(
    function(response){
      testAPI();
    },
    {scope: "publish_actions"})

  console.log("image been clicked yoh");
});

function testAPI() {
  FB.api('/me', function(response) {
    name = response.name;
    console.log('Successful login for: ' + response.name);
    document.getElementById('status').innerHTML = 'Thanks for logging in, ' + response.name + '!';
  });
}
