var screen= document.getElementById("screen")

function buttonClk(value){

   screen.value += value //"+=" used instead of "=" to repeat same value 

}


function clearScreen(){

    screen.value=" "
}

 function getResult(){
    
   
 var result= eval(screen.value)

 screen.value=result

 }