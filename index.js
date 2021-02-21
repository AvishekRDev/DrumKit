//Detecting Button press
var buttonArray = document.querySelectorAll(".drum");
for (var i = 0; i < buttonArray.length; i++) {

  //detecting click event
  buttonArray[i].addEventListener("click", function() {

    var buttonClicked = this.innerHTML;
    makeSound(buttonClicked);
    buttonAnimation(buttonClicked);
    });

//detecting keyboard keys pressed
  document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
  });

//function to detect exactly what key was pressed or clicked
function makeSound(key){
  switch (key) {
    case "w":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case "a":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case "s":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case "d":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    case "j":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case "k":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
    case "l":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;

    default:
      console.log(key);

    };
  }


}

//function to visualize the button pressed
function buttonAnimation(keyPressed){
    var activeButton= document.querySelector("."+keyPressed);
    activeButton.classList.add("pressed");
    setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100)

  }
