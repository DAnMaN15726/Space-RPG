let counter = 0;
let array = [];
let toggleChoice1 = false;
let toggleChoice2 = false;
let toggleChoice3 = false;
let toggleChoice4 = false;

let player = 100;



let isaacC = 100;
let Shodan = 100;
let hellKnight = 100;
let dooM = 100;
const damageO = {Stomp: 10, Shoot: 20, Impale: 25, ContactBeam: 45};
const damage1 = {ShockToTheSystem: 15, Holograph: 20, IonOrb: 15};
const damage2 = {Earthquake: 15, RipTear: 20, Growl: 15, Bite: 45};
const damage3 = {Punch: 10, DoubleBarrel: 20, RipandTear: 30, BFG9000: 70};

const moveSet = [
    {
        name: "List1",
        moves: [
            {
                name : 'Stomp',
                power : 15
            },
            {
                name: 'Shoot',
                power: 20
            },
            {
                name: 'Impale',
                power: 25
            },
            {
                name: 'ContactBeam',
                power: 40
            }
        ]

    },

    {
        name: "List2",
        moves: [
            {
                name : 'ShockToTheSystem',
                power : 15
            },
            {
                name: 'Holograph',
                power: 10
            },
            {
                name: 'IonOrb',
                power: 20
            }
            
        ]

    }, 
    {
    name: "List3",
    moves: [
            {
                name: 'Earthquake',
                power: 15
            },
            {
                name: 'RipTear',
                power: 25
            },
            {
                name: 'Growl',
                power: 15
            },
            {
                name: 'Bite',
                power: 45
            }
        ]

    },
    {
    name: "List4",
    moves: [
            {
                name: 'Punch',
                power: 10
            },
            {
                name: 'DoubleBarrel',
                power: 20
            },
            {
                name: 'RipandTear',
                power: 30
            },
            {
                name: 'BFG900',
                power: 70
            }
        ]

    }
    
]





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
        $("#Card1").hide();
        

    }
    if(toggleChoice2 === false){
        $("#Card2").hide();
        
        
    }
    if( toggleChoice3 === false){
        $("#Card3").hide();
        

    }
    if(toggleChoice4 === false){
        $("#Card4").hide();
        
        
    }

        
    $("#continue").toggleClass("active");
    $("#continue").hide();
    reset();

}


function continueC(){
    
        $(array[0]).remove();
        let x = number(array[0]);
        console.log(x);
        let y = 0;
        
        let i = 0;
        for(let i = 0; i < moveSet[x].moves.length; i++ ){
            // x++;
            y++;
            var buton = $("<button>"+ moveSet[x].moves[i].name + "</button>") 
            console.log(moveSet[x].moves[i].name);
            buton.attr("id", y);
            buton.attr("class", "buton");
            
            buton.appendTo(".container");
        }    
            
            


        $("#1").click(function(){
        
            let V = moveSet[x].moves[0].power;
            

            damage(V, array[1]);



        });
        
        $("#2").click(function(){
            console.log(this);
            let V = moveSet[x].moves[1].power;


            damage(V, array[1]);



        });

        $("#3").click(function(){
            console.log(this);
            let V = moveSet[x].moves[2].power;


            damage(V, array[1]);



        });

        $("#4").click(function(){
            console.log(this);
            let V = moveSet[x].moves[3].power;


            damage(V, array[1]);



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




function number(arr){
    if (arr === "#Card1"){
        const num = 0
        return num;
    }
    if (arr === "#Card2"){
        const num = 1
        return num;
    }
    if (arr === "#Card3"){
        const num = 2
        return num;
    }
    if (arr === "#Card4"){
        const num = 3
        return num;
    }
}



function damage(input, arr){
    if (arr === "#Card1"){
        
        isaacC = healthBar(isaacC, input);
        

    }
    if (arr === "#Card2"){
        
        Shodan = healthBar(Shodan, input);
        

    }
    if (arr === "#Card3"){
        
        hellKnight = healthBar(hellKnight, input);

    }
    if (arr === "#Card4"){
        
        dooM = healthBar(dooM, input);
    }

}




function healthBar(Total, inP){
    
    
    

    

    if (Total < inP){
        $(".HealthCyan").animate({"width": "0%"}, 150);
        $(".HealthBrightCyan").animate({"width": "0%"}, 1000);
        
        resetAll();


    }
    else{
        $(".HealthCyan").animate({"width": Total-inP + "%"}, 150);
        $(".HealthBrightCyan").animate({"width": Total-inP + "%"}, 1000);
        

    }
    totalLeft = Total-inP;
    
    
    
    return totalLeft;
}




function resetAll(){
    $("#Card1").show();
    $("#Card2").show();
    $("#Card3").show();
    $("#Card4").show();

    toggleChoice1 = false;
    toggleChoice2 = false;
    toggleChoice3 = false;
    toggleChoice4 = false;

    array = [];
    input = 0;
    counter = 0;
    
    $(".HealthCyan").animate({"width": "100%"}, 150);
    $(".HealthBrightCyan").animate({"width": "100%"}, 1000);
    $(".buton").remove();




}