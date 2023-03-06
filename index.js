var num=document.querySelectorAll(" .drum").length;
for(var i=0;i<num;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var clfk=this.innerHTML;
        buttonanimation(clfk);
  
        makesound(clfk);
    }
    );
}
document.addEventListener("keydown",function(event){

    buttonanimation(event.key);

makesound(event.key);

})



function makesound(key){
    var sou=this.innerHTML;
    
    switch(key){
    
        case "w":
            var audio=new Audio("crash.mp3");
            audio.play();
            case "a":
    var audio=new Audio("kick.mp3");
    audio.play();
    case "s":
    var audio=new Audio("snare.mp3");
    audio.play();
    break;
    case "d":
    var audio=new Audio("tom-1.mp3");
    audio.play();
    break;
    case "j":
    var audio=new Audio("tom-2.mp3");
    audio.play();
    break;
    case "k":
    var audio=new Audio("tom-3.mp3");
    audio.play();
    break;
    case "l":
    var audio=new Audio("tom-4.mp3");
    audio.play();
    break;
    default:alert("error");
    
    }   

    
}
function buttonanimation(ani){

    var activate=document.querySelector("."+ani);
    activate.classList.add("pressed");

    setTimeout(function(){

        activate.classList.remove("pressed");
    },100);
}