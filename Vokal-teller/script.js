let includesVowels = 0;
let inputOutput = "";


updateView();
function updateView() {
    document.getElementById('app').innerHTML = /*Html*/ `
    
    <div class="center"> 
        <div>Det er ${includesVowels} vokaler i setningen din</div>
        <input id="input" type="text" oninput="inputOutput = this.value" value="${inputOutput}"/>
        <div class="center">
            <button onclick="countVowelsSwitch(inputOutput)">count Vowels Switch</button>    
            <button onclick="countVowelsIf(inputOutput)">count Vowels If</button>    
            <!-- <button onclick="countVowelsIfTryToMakeBetter(inputOutput)">count Vowels If Better</button> -->    
        </div>  
    </div>
 
    `;
    document.getElementById('input').focus();
}

/* //failed
function countVowelsIfTryToMakeBetter(textInput) {
    includesVowels = 0;
    for (let index = 0; index < textInput.length; index++) {
        let text = textInput.charAt(index);
        if (text.includes(vowelArray)) includesVowels++;
        console.log(text);
        console.log(includesVowels);
    }
}
 */

function countVowelsSwitch(textInput) {
    includesVowels = 0;

    for (let index = 0; index < textInput.length; index++) {
        switch (textInput.charAt(index)) {
            case 'a':
                includesVowels++;
                break;
            case 'e':
                includesVowels++;
                break;
            case 'i':
                includesVowels++;
                break;
            case 'o':
                includesVowels++;
                break;
            case 'u':
                includesVowels++;
                break;
            case 'y':
                includesVowels++;
                break;
            case 'æ':
                includesVowels++;
                break;
            case 'ø':
                includesVowels++;
                break;
            case 'å':
                includesVowels++;
                break;
            default:
                break;
        }

        console.log(textInput.charAt(index));
        console.log(includesVowels);
    }
    updateView();
}

function countVowelsIf(textInput) {
    includesVowels = 0;
    for (let index = 0; index < textInput.length; index++) {
        let textLetter = textInput.charAt(index);

        if (textLetter.includes('a')) includesVowels++;
        if (textLetter.includes('e')) includesVowels++;
        if (textLetter.includes('i')) includesVowels++;
        if (textLetter.includes('o')) includesVowels++;
        if (textLetter.includes('u')) includesVowels++;
        if (textLetter.includes('y')) includesVowels++;
        if (textLetter.includes('æ')) includesVowels++;
        if (textLetter.includes('ø')) includesVowels++;
        if (textLetter.includes('å')) includesVowels++;

        console.log(textInput.charAt(index));
        console.log(includesVowels);
    }
    updateView();
}