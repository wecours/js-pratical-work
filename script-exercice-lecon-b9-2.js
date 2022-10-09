// 8 oct 2022
// Exercice Redaction SMS

// Votre message :

// input textarea : Bonj
// Console.log:
// Indication :
// 4/120 caracteres.
// 1 page, 120 ar

// input textarea : Hello world,
// Je simule l'ecriture de sms
// de mon telephone
// sur html et javascript. Et vous 
// verrez votre nombre de caractere 
// et nombre de page avec le prix 
// de votre sms
// Console.log:
// Indication :
// 160/240 caracteres.
// 2 pageS, 240 ar


// Tips : 
let message = "Bonjo"
let nbCaractere = message.length

// Tips :
// input textarea, event onchange {
    // 
// }



let indication = document.getElementById("indication");
let messageContent = document.getElementById("message-content");
messageContent.onkeyup = function(event){
    // Indication refa miova ny valeur @text
    const messageValue = event.target.value;
    const characterCount = messageValue.length
    const nbSmsPageCurrent = Math.ceil(characterCount / 120)
    const smsPrice = nbSmsPageCurrent * 120
    let pluralSinglePage = "";
    let pluralSingleCharacter = "";
    if(nbSmsPageCurrent > 1 ){
        pluralSinglePage = "s"
    }
    if(characterCount > 1){
        pluralSingleCharacter = "s"
    }
    let indicationText = `
Indication : 
${characterCount}/${nbSmsPageCurrent * 120} caractere${pluralSingleCharacter}.
${nbSmsPageCurrent} page${pluralSinglePage}, ${smsPrice} ar
    `;
    // console.log(indicationText)
    indication.textContent = indicationText
}

// Indication initial
indication.textContent = `
    Indication : 
    0/120 caractere.
    1 page, 120 ar
`;