       //    document.querySelector("button").addEventListener("click",handleClick);

//so basically it finds the first button in our document which is the w drum button and then it adds the event listener to that button so that 
//it listens for clicks that happen on that button and when it does it runs the code inside the function handleclICK 

        //   function handleClick(){
        //      alert("I GOT CLICKED");
        //    }

// IF document.querySelector("button").addEventListener("click",handleClick()); YEH hota yani handleClick() hota toh then it will be straight up method call and it will call the method
// straight away when its adding the event listener but ,we dint want this function to trigger as  soon as the event listener is added ,we want it to trigger when the 'click' happens
// so a better way of doing this will be :::::::


            //   document.querySelector("button").addEventListener("click",function(){
            //     alert ("I GOT CLICKED");
            //   });

//make an anonymous function

var noOfDrumButtons=document.querySelectorAll(".drum").length;
for(var i=0;i<noOfDrumButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){     //event listener is added to all buttons one by one
             var buttonInnerHTML= this.innerHTML;  
            makeSound(buttonInnerHTML);
            buttonAnimation(buttonInnerHTML)  ;                               // console.log(this) will give us the button that triggered the event
    });
}

document.addEventListener("keypress",function(event){     //keypress is an event
    makeSound(event.key);     
    buttonAnimation(event.key)  ;                   //key is a property of the event' keypress' which gives the valueof the key press
});

function makeSound(key){
    switch (key) {
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");                                   //what happens when we click on the first button,that button's event listener will trigger the function that was attached to the event listener
            tom1.play(); 
         break;

         case "a":
            var tom2=new Audio("sounds/tom-2.mp3");                                   //what happens when we click on the first button,that button's event listener will trigger the function that was attached to the event listener
            tom2.play(); 
         break;
         case "s":
            var tom3=new Audio("sounds/tom-3.mp3");                                   //what happens when we click on the first button,that button's event listener will trigger the function that was attached to the event listener
            tom3.play(); 
         break;
         case "d":
            var tom4=new Audio("sounds/tom-4.mp3");                                   //what happens when we click on the first button,that button's event listener will trigger the function that was attached to the event listener
            tom4.play(); 
         break;
         case "j":
            var crash=new Audio("sounds/crash.mp3");                                   //what happens when we click on the first button,that button's event listener will trigger the function that was attached to the event listener
            crash.play(); 
         break;
         case "k":
            var kick=new Audio("sounds/kick-bass.mp3");                                   //what happens when we click on the first button,that button's event listener will trigger the function that was attached to the event listener
            kick.play(); 
         break;
         case "l":
            var snare=new Audio("sounds/snare.mp3");                                   //what happens when we click on the first button,that button's event listener will trigger the function that was attached to the event listener
            snare.play(); 
         break;
    
        default: console.log(buttonInnerHTML);
            
    }   
}

function buttonAnimation(currentKey) {
     var activeButton=document.querySelector("."+currentKey);
     activeButton.classList.add("pressed");
      setTimeout(function(){
        activeButton.classList.remove("pressed");
      },100)
}
 
