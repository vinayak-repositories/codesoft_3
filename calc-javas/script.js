const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');


function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(input){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}



document.addEventListener('keydown', (event) => {
  const key = event.key;

  if (key >= '0' && key <= '9' || key === '.' || key === '+' || key === '-' || key === '*' || key === '/' || key === '=' || key === 'Enter') {
    if (key === 'Enter') {
      calculate();
    } else {
      appendToDisplay(key);
    }
  } else if (key === 'c' || key === 'Escape' || key ==='C') {
    clearDisplay();
  }
});

