let counter = 0;
let boolean = false;
// var toggleChoice = false;
var toggleChoice1 = false;
var toggleChoice2 = false;
var toggleChoice3 = false;
var toggleChoice4 = false;






$("#Card1").click(function(){
    // toggleChoice =! toggleChoice;
    
    
    $(this).toggleClass("active", toggleChoice1 =! toggleChoice1); 
    // console.log(this.id);
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
    // toggleChoice =! toggleChoice;
    
    $(this).toggleClass("active", toggleChoice2 =! toggleChoice2); 
    // console.log(this.id);
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
    // toggleChoice =! toggleChoice;
    
    
    $(this).toggleClass("active", toggleChoice3 =! toggleChoice3); 
    // console.log(this.id);
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
    // toggleChoice =! toggleChoice;
   
    
    $(this).toggleClass("active", toggleChoice4 =! toggleChoice4); 
    // console.log(this.id);
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
        $("#continue").toggleClass("active");
        $("#continue").empty();
        reset();
        
        

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