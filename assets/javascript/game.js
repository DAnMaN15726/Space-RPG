let counter = 0;

var toggleChoice1 = false;
var toggleChoice2 = false;
var toggleChoice3 = false;
var toggleChoice4 = false;


let isaacC = 100;
let Shodan = 200;
let hellKnight = 150;
let dooM = 175;







const audioElement = document.createElement("audio");
audioElement.setAttribute("src", "./assets/audio/misc_menu_4.wav");

const audioE2 = document.createElement("audio");
audioE2.setAttribute("src", "./assets/audio/misc_sound.wav")








$("#Card1").click(function(){
    
    
    audioElement.play();
    audioElement.currentTime=0
    $(this).toggleClass("active", toggleChoice1 =! toggleChoice1); 
    
    if( toggleChoice1 === true){
        counter = counter + 1;
        console.log(counter);
    }
    else if
    (toggleChoice1 === false){
        counter = counter - 1;
        console.log(counter);
    }







    if (counter === 2){
        console.log("Continue?");
        console.log(counter);
        continueA();
    }



});

$("#Card2").click(function(){
    
    audioElement.play();
    audioElement.currentTime=0
    $(this).toggleClass("active", toggleChoice2 =! toggleChoice2); 
    
    if( toggleChoice2 === true){
        counter = counter + 1;
        console.log(counter);
    }
    else if
    (toggleChoice2 === false){
        counter = counter - 1;
        console.log(counter);
    }







    if (counter === 2){
        console.log("Continue?");
        console.log(counter);
        continueA();
    }



});

$("#Card3").click(function(){
    
    audioElement.play();
    audioElement.currentTime=0
    $(this).toggleClass("active", toggleChoice3 =! toggleChoice3); 
    
    if( toggleChoice3 === true){
        counter = counter + 1;
        console.log(counter);
    }
    else if
    (toggleChoice3 === false){
        counter = counter - 1;
        console.log(counter);
    }







    if (counter === 2){
        console.log("Continue?");
        console.log(counter);
        continueA();
    }



});

$("#Card4").click(function(){
    
    audioElement.play();
    audioElement.currentTime=0
    $(this).toggleClass("active", toggleChoice4 =! toggleChoice4); 
    
    if( toggleChoice4 === true){
        counter = counter + 1;
        console.log(counter);
    }
    else if
    (toggleChoice4 === false){
        counter = counter - 1;
        console.log(counter);
    }







    if (counter === 2){
        console.log("Continue?");
        console.log(counter);
        continueA();
    }



});




function continueA(){
    $("#continue").toggleClass("active");
    $("#continue").append("<h1>Continue?</h1>");


    $("#continue").append("<input type = 'button' value = 'Yes' id = 'Yes' />");
    $("#continue").append("<input type = 'button' value = 'No' id = 'No' />");
    $("#No").click(function(){
        audioE2.play();
        audioE2.currentTime = 0;
        $("#continue").toggleClass("active");
        $("#continue").empty();
        reset();
      });
    $("#Yes").click(function(){
        continueB();
        continueC();
    });


    
}


function reset(){
    counter = 0;


    if( toggleChoice1 === true){
        $("#Card1").toggleClass("active", toggleChoice1 =! toggleChoice1);
        

    }


    if(toggleChoice2 === true){
        $("#Card2").toggleClass("active", toggleChoice2 =! toggleChoice2);
        
        
    }


    if( toggleChoice3 === true){
        $("#Card3").toggleClass("active", toggleChoice3 =! toggleChoice3);
        

    }


    if(toggleChoice4 === true){
        $("#Card4").toggleClass("active", toggleChoice4 =! toggleChoice4);
        
        
    }
}





function continueB(){
    if( toggleChoice1 === false){
        $("#Card1").remove();
        

    }
    if(toggleChoice2 === false){
        $("#Card2").remove();
        
        
    }
    if( toggleChoice3 === false){
        $("#Card3").remove();
        

    }
    if(toggleChoice4 === false){
        $("#Card4").remove();
        
        
    }

        
    $("#continue").toggleClass("active");
    $("#continue").empty();
    reset();

}


function continueC(){
    




}


function damage(identity, damage){









}

