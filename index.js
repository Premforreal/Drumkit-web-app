
//Get no. of elements with class="drum"
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

//detecting button presses
//for loop for adding event listener to all of the buttons (drums.Be more specific, which is better)
for (var i = 0; i < numberOfDrumButtons; i++) {
      //listening for clicks using anonymous function
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
     //calling makesound function and buttonAnimation function
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });
}

//listening for keyboard presses
document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);

});

//this function takes a character and checks through switch statement
function  makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
      //default is like else statement
    default: console.log(key);

  }
}

//button animation
function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey );
      //applying class .pressed from css
  activeButton.classList.add("pressed");
      //using this to remove above applied css (0.1 seconds)
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}


//pun in footer
function show_hide()
{
   var myAnswer = document.getElementById('answer');
   var displaySetting = myAnswer.style.display; 
   if(displaySetting=="inline-block"){
       myAnswer.style.display = 'none';
   }
   else
   {
       myAnswer.style.display = 'inline-block';
       var joke = new Audio("sounds/Joke Sound.mp3");
       joke.play();
   }
}

