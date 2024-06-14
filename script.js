const [EN, RE] = ['EN', 'RE']
const dictionary = {
    'Ekkées - Numbers': [
        {EN: 'one', RE: 'kóow'},
        {EN: 'two', RE: 'lámma'},
        {EN: 'three', RE: 'séyyah'},
        {EN: 'four', RE: 'áffar'},
        {EN: 'five', RE: 'chán'},
        {EN: 'six', RE: 'líh'},
        {EN: 'seven', RE: 'teebá'},
        {EN: 'eight', RE: 'siyyéet'},
        {EN: 'nine', RE: 'saagaál'},
        {EN: 'ten', RE: 'tomón'},
        {EN: 'twelve', RE: 'tomón ichóow lámma'},
        {EN: 'twenty', RE: 'tomón lámma'},
        {EN: 'twenty one', RE: 'tomón lámma ichóow kóow'},
        {EN: 'one hundred', RE: 'kúdoó'},
        {EN: 'one hundred and twenty', RE: 'kúdoó ichóow tomón lámma'},
        {EN: 'two hundred', RE: 'kúd lámma'},
        {EN: 'thousand', RE: 'élif'},
    ]
}
//helper functions
const randomDictEntry = () =>
    dictionary['Ekkées - Numbers']
        [Math.floor(Math.random() * dictionary['Ekkées - Numbers'].length)];

const shuffle = (array) => {
  let currentIndex = array.length;
  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

const exerciseContainer = document.querySelector('#exerciseContainer');
const returnButtonContainer = document.querySelector("#returnButtonContainer");
returnHome();

function startLanguage(lan){
    returnButtonContainer.innerHTML = 
    `<button id="returnButton" onClick="returnHome()">Nokho - Return</button><hr>`;
    showCategories(lan)
}

function newPrompt(lan){
    const dictEntry = randomDictEntry();
    const answers = [dictEntry]
    for (var i = 0; i < 4 ; i++){
        answers.push(randomDictEntry());
    }
    shuffle(answers);
    const oppositeLan = lan == EN ? RE : EN;
    answers.forEach(a => {a.correct = a == dictEntry});
    exerciseContainer.innerHTML = 
    `<p>${dictEntry[lan]}</p>`;
    answers.forEach(a => {exerciseContainer.innerHTML += 
        `<button onClick="showCorrect(${a.correct ? true : false}, ${lan})">${a[oppositeLan]}</button>`});
}

function showCorrect(correct, lan){
    exerciseContainer.innerHTML = `<p>${correct ? 'Haaggán!' : 'Baábul.'}</p> <p>${correct ? 'Correct!' : 'Incorrect.'}</p>
    <button onClick="newPrompt(${lan})">Worsí husúb - Next question</button>`;
}

function returnHome(){
    returnButtonContainer.innerHTML = '';
    exerciseContainer.innerHTML = 
    `<button onClick="startLanguage('EN')">English - Ren'dille</button>
    <button onClick="startLanguage('RE')">Ren'dille - English</button>`;
}

function showCategories(lan){
    exerciseContainer.innerHTML = `<button onClick="newPrompt(${lan})">
        Yeedád tuummán - All words</button><hr>`;
    Object.keys(dictionary).forEach(k => exerciseContainer.innerHTML += 
        `<button>${k}</button>`);
}