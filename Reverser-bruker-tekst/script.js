let inputOutput = "Aibohphobia";
let reverseText = ''

updateView();
function updateView() {
    document.getElementById('app').innerHTML = /*Html*/ `
    
    <div class="center"> 
        <div></div>
        <input id="input" type="text" oninput="inputOutput = this.value" value="${inputOutput}"/>
        <div class="center">
            <button onclick="reverseInput(inputOutput)">Reverse Input</button>  
            <div id="result">${reverseText}</div>
        </div>  
    </div>
 
    `;
    document.getElementById('input').focus();
}

function reverseInput(textInput) {
    reverseText = ''
    for (let index = textInput.length; index >= 0; index--) {
        reverseText = reverseText + textInput.charAt(index);
    }
    updateView();
}

// For å hjelpe meg forstå hvordan å sette det opp
/* function printLetters(inputString) {

    // document.getElementById('letters').innerHTML += inputString;
    for (let index = 0; index <= inputString.length; index++) {
        text = text + inputString.charAt(index) + ' ';
    }
    document.getElementById('letters').innerHTML = text;
} */