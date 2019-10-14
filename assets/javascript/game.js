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



});



