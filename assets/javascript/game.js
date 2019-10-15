let counter = 0;
let array = [];
var toggleChoice1 = false;
var toggleChoice2 = false;
var toggleChoice3 = false;
var toggleChoice4 = false;

let player = 0;
let enemy = 0;


let isaacC = 100;
let Shodan = 200;
let hellKnight = 150;
let dooM = 175;
const damageO = {Stomp: 15, Shoot: 20, Impale: 15, ContactBeam: 45};
const damage1 = {ShockToTheSystem: 15, Holograph: 20, IonOrb: 15};
const damage2 = {Earthquake: 15, RipTear: 20, Growl: 15, Bite: 45};
const damage3 = {Punch: 10, DoubleBarrel: 20, RipandTear: 30, BFG9000: 70};







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
        array.push("#Card1");
    }
    else if
    (toggleChoice1 === false){
        counter = counter - 1;
        console.log(counter);
        removeElement("#Card1");
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
        array.push("#Card2");
    }
    else if
    (toggleChoice2 === false){
        counter = counter - 1;
        console.log(counter);
        removeElement("#Card2");
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
        array.push("#Card3");
    }
    else if
    (toggleChoice3 === false){
        counter = counter - 1;
        console.log(counter);
        removeElement("#Card3");
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
        array.push("#Card4");
    }
    else if
    (toggleChoice4 === false){
        counter = counter - 1;
        console.log(counter);
        removeElement("#Card4");
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
        array.length = 0;
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



    console.log(array);
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
    // damage();
        $(array[0]).remove();
        let x = 0
        
        // $(".container").append(buton);
        //$("#buton").prop('value', array[1]);
        
        $.each(damageO, function(key,valueObj){
            x++;
            var buton = $("<button>"+ key + "</button>") 
            
            buton.attr("id", x);
            buton.attr("class", "buton");
            // $(".container").append(buton);
            buton.appendTo(".container");
            
            
            console.log(key);
        });


        $("#1").click(function(){
            console.log(this);
            
            sound( 1, array[0]);



        });
        
        $("#2").click(function(){
            console.log(this);
            sound(this);





        });

        $("#3").click(function(){
            console.log(this);
            sound(this);





        });

        $("#4").click(function(){
            console.log(this);
            sound(this);





        });
        



}














function removeElement(div){
    array = jQuery.grep(array, function(value) {
        return value != div;
      });
      console.log(array);
      
      return (array);
}











function sound(x, arr){

    









}