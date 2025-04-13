const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value="";
}

function calculate(){
    try{
    display.value = eval(display.value);
    }

    catch(a){
        display.value = "Error";
    }
}

document.addEventListener("keydown",(event)=>
    {
        if(event.key == "Enter"){
            calculate();
        }
        else if(event.key == "Backspace"){
            clearDisplay();
        }
        else if(event.key == "Escape"){
            clearDisplay();
        }
        else if(event.key == "Delete"){
            clearDisplay();
        }
        else if(event.key == "c"){
            clearDisplay();
        }
        else if(!isNaN(event.key) || event.key == "+" || event.key == "-" || event.key == "*" || event.key == "/"){
            display.value += event.key;
        }   
     }
)