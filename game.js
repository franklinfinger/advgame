
gameBeginning();

function gameBeginning (){

alert("Let's find out what diseases you might have.");

  var answer = prompt("Do you want to know if you have a disease? Yes or No").toLowerCase();
    if (answer === 'yes') {
      var chooseOne =prompt("Cool, this should be fun, choose from one of the following: (A) Did you eat a bowl of cereal?, (B) Did you go to the Fair?, or (C) Did you get your new drivers license? choose A, B or C");yourDecision(chooseOne.toLowerCase());
    } else if (answer === "no") {
      alert("You could have had a really fun disease, booo on you!");
      gameBeginning();

    } else {
      console.log("Don't piss me off, choose one!: A,B,or C");
      gameBeginning();
    }
};


function yourDecision(chooseOne) {
  if (chooseOne === "a") {
    var cereal = prompt("This could be bad! Did you eat, (A) Count Chocula, (B) Peanut Butter Captain Crunch or (C) Golden Flakes?  please choose A, B, or C");whatKind(cereal.toLowerCase());
  } else if (chooseOne === "b") {
       var contest = prompt("The Fair is fun but full of potential life threating diseases, Did you enter the Hot Dog Eating contest, yes or no?");fairGames(contest.toLowerCase());
   } else if (chooseOne === "c") {
       var backRoom = prompt("Did you get bored at the DMV and sneak off to one of the back room, yes or no?");theDmv(backRoom.toLowerCase());
   } else {
      alert("You suck and you need to make a choice next time.");
      gameBeginning();
   }
}

function whatKind(cereal) {
  if (cereal === "a") {
    var bowls = prompt("Did you eat more than 2 bowls last week, yes or no?");howManyBowls(bowls.toLowerCase());
  } else if (cereal === "b") {
      alert("I love Peanut Butter Captain Crunch as well and it probably saved you life today.");
    } else if (cereal === "c"){
      alert("That cereal is a bit boring but you are disease free.");
    } else {
      alert("You suck and you need to make a choice next time.");
      gameBeginning();
    }
}

function fairGames(contest) {
  if (contest === "yes"){
    alert("You ate too many hot dogs my friend, you have what is know as HOT DOG FINGER disease! ");
  } else if (contest === "no") {
    alert("There is luck for you because you did not get the HOT DOG FINGER disease.");
  } else {
    alert("You suck and you need to make a choice next time.");
    gameBeginning();
  }
}

function theDmv (backRoom) {
  if (backroom === "yes") {
    alert("this is bad news, you had sexual encounters with a robot in that back room and now you have, GOVERNMENT CREATED KILLER NANO ROBOT infection.");
  } else if (backRoom === "no"){
    alert("You are lucky, you would have made love to a robot and caugh GOVERNMENT CREATED KILLER NANO ROBOT infection. ");
  } else {
    alert("You suck and you need to make a choice next time.");
    gameBeginning();
  }
}
function howManyBowls(bowls) {
  if (bowls === "yes") {
    alert("There is no hope for you, you have COUNT CHOCULITIS.");
  } else if(bowl ==="no") {
    alert("You don't have COUNT CHOCULITIS, but you should eat another cereal next time.")
  } else {
    alert("You suck and you need to make a choice next time.");
    gameBeginning();
  }
 }
