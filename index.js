// document.querySelector("button").addEventListener("click",handleClick); // if we write at the palece of handleClick , handleClick()
// // then it will call without clicked
  
// function handleClick()
// {
//     alert("I got clicked");
// }

// we can also write this code like this

// Detection Button press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i = 0;i<numberOfDrumButtons;i++) // using loop here for selection all buttons
{
    document.querySelectorAll("button")[i].addEventListener("click",function ()
{
    // this.style.color = "white";
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    
    buttonAnimation(buttonInnerHTML);

}); 

}

    // Detection keyboard press

document.addEventListener("keypress",function(event){
    makeSound(event.key);
   
    buttonAnimation(event.key);

});

function makeSound(key)
{

    switch (key) {
        case "w":
            var tom1 = new Audio('tom-1.mp3');
            tom1.play();
            break;
        
        case "a":
            var tom2 = new Audio('tom-2.mp3');
            tom2.play();
            break;
        
        case "s":
            var tom3 = new Audio('tom-3.mp3');
            tom3.play();
            break;
        
        case "d":
            var tom4 = new Audio('tom-4.mp3');
            tom4.play();
            break;
        
        case "j":
            var snare = new Audio('snare.mp3');
            snare.play();
            break;
        
        case "k":
            var crash = new Audio('crash.mp3');
            crash.play();
            break;
        
        case "l":
            var kick_bass = new Audio('kick-bass.mp3');
            kick_bass.play();
            break;

        default: console.log(buttonInnerHTML);
           
    }
}

function buttonAnimation(currentKey)
{
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout( function(){
        activeButton.classList.remove("pressed");
    },100);

    // var activeButton = document.querySelector("." + currentKey);

    // activeButton.classList.add("pressed");

    // setTimeout(function () {
    //     activeButton.classList.remove("pressed");
    // } , 100);
} 



//   Higher Order Funtions

// Higher order funtions are function that can take other funtions as inputs.

// function add(n1,n2)
//      {
//          return n1+n2;
//      }
// function multiply(n1,n2){
//          return n1*n2;
//      } 
// function Calculator(n1,n2,operator)
//     {
//         return operator(n1,n2)
//     }

// calculator(3,4,add);
// 7
// debugger;
// calculator(3,4,multiply);
// 12

// debugger;
// calculator(3,4,multiply);
// 12
