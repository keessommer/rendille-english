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
    ],
    'Bariiteyyó - Greetings': [
        {EN:'Do you have peace?', RE:'Á nebéy á?'},
        {EN:'Have you (singular) slept in peace?', RE:'Nebéy ón bariité?'},
        {EN:'Have you (plural) slept in peace?', RE:'Nebéy ón bariiteén?'},
        {EN:'Have you (singular) rested in peace?', RE:`Nebéy ón ká 'hadé?`},
        {EN:'Have you (plural) rested in peace?', RE:`Nebéy ón ká 'hadeén?`},
        {EN:'Have you (singular) brought in the animals in peace?', RE:'Nebéy ón gessatté?'},
        {EN:'Have you (plural) brought in the animals in peace?', RE:'Nebéy ón gessatteén?'},
        {EN:'Have you (singular) arrived safely?', RE:'Nebéy ón timíy?'},
        {EN:'Have you (plural) arrived safely?', RE:'Nebéy ón timaateén?'},
        {EN:'Have you (singluar) arrived safely from your evening trip?', RE:'Nebéy ón soódeylámátté?'},
        {EN:'Have you (plural) arrived safely from your evening trip?', RE:'Nebéy ón soódeylámáttéen?'},
        {EN:'There is peace', RE:'Á nebéy.'},
        {EN:'Is there peace in your (singular) circle?', RE:'Goytáah á nebéy ón á?'},
        {EN:'Is there peace in your (plural) circle?', RE:'Goytíin á nebéy ón á?'},
        {EN:'I/we are well.', RE:'Á badáad ón'},
        {EN:'How are you (singular)?', RE:'Á haaggántahe ón á?'},
        {EN:'How are you (plural)?', RE:'Á haaggántiihiin ón á?'},
        {EN:'I am fine.', RE:'Á haaggánahe.'},
        {EN:'We are fine.', RE:'Á haaggánnahe.'},
        {EN:'God rest you (singular) well.', RE:'Waákh kibariisti.'},
        {EN:'God rest you (plural) well.', RE:'Waákh atin bariisti.'},
        {EN:'May God bear you up (safe journey).', RE:`Waákh seréy kaási'do.`},
        {EN:'Our God.', RE:`Waákheenna`},
    ],
    'Yeedád hawwées - Conversation words': [
        {EN: 'Yes.', RE: `Aa / Aa'héey.`},
        {EN: 'No.', RE: 'Méle.'},
    ],
    'Camel terms  - Yeedád gáal': [
        {EN: 'camel', RE: `gáal`},
        {EN: 'castrated male camel', RE: 'foólas'},
        {EN: 'castrated male camels', RE: 'foolasó'},
        {EN: 'female camel', RE: 'ayú'},
        {EN: 'female camels', RE: 'aló / aleyyó'},
        {EN: 'female camel on loan for milk', RE: 'máal'},
        {EN: 'female camel that recently gave birth', RE: 'irbáan'},
        {EN: 'large male camel (kept for meat)', RE: 'dufáan'},
        {EN: 'large male camels (kept for meat)', RE: 'dufaán'},
        {EN: 'The milking camel.', RE: 'Jéer.'},
        {EN: 'pack camel', RE: 'hál'},
        {EN: 'pack camels', RE: 'oór'},
        {EN: 'pack camels', RE: 'oór'},
        {EN: 'experienced pack camels', RE: 'roottí'},
        {EN: 'young pack camel', RE: 'léyley'},
        {EN: 'young pack camels', RE: 'léyleyye'},
        {EN: 'camel received as dowry', RE: 'Chamá'},
        {EN: 'camels received as dowry', RE: 'Chamayyó'},
        {EN: 'riding camel', RE: 'rukkúub'},
        {EN: 'sacred female camel', RE: 'doór'},
        {EN: 'sacred female camels', RE: 'dooró'},
        {EN: 'young, weak or sick camel (calf)', RE: 'ilbóor / urbóor'},
        {EN: 'young, weak or sick camels (/calves)', RE: 'ilbooró / urbooró / ilboór / urboór'},
        {EN: 'young weak or sick camels', RE: 'ilbooró / urbooró'},
        {EN: 'camel sacrificed for prosperity', RE: `Dobbosó`},
        {EN: 'camel sacrificed for camels', RE: 'Gaalríb'},
        {EN: 'camel sacrificed for warrior protection', RE: 'Herríb'},
        {EN: 'camel sacrificed for rain', RE: 'Hirlé'},
        {EN: 'female camel calf', RE: 'nyirákh'},
        {EN: 'female camel calves', RE: 'nyirkho'},
        {EN: 'male camel calf', RE: 'nyírakh'},
        {EN: 'male camel calves', RE: 'nyirkhó'},
        {EN: 'camel calf colt of rubbing', RE: 'nyírakhí biirnaan'},
        {EN: 'older female camel calf', RE: 'khaalím'},
        {EN: 'older female camel calves', RE: 'khaalimó / gittóom'},
        {EN: 'older male camel calf', RE: 'khaálim'},
        {EN: 'older male camel calves', RE: 'teéru / gittóom'},
        {EN: 'supply buying caravan', RE: `muú'dal`},
        {EN: 'water fetching caravan', RE: 'waráab'},
        {EN: 'water fetching caravans', RE: 'waráabbe'},
        {EN: 'The camel herding.', RE: 'Gaalyaakhíme.'},
        {EN: 'camel fly', RE: 'dakkár'},
        {EN: 'rope of camel hide', RE: 'dáh'},
        {EN: 'fresh untreated camel skin', RE: 'góg'},
        {EN: 'fresh untreated camel skins', RE: 'gogág'},
        {EN: 'camel foot', RE: 'yákh'},
    ],
    // 'Yeedád reém - Nominal grammar': [
    //     {EN: 'The boy.', RE: 'Ínam.'},
    // ],
}

const dictKeys = Object.keys(dictionary)
//helper functions
const randomDictEntry = (cat = false) => {
    if (cat && cat != 'false'){
        console.log(cat);
        return dictionary[cat][Math.floor(
            Math.random() * dictionary[cat].length)];
    }
    const randomCatKey = dictKeys[Math.floor(
        Math.random() * dictKeys.length)]
    return dictionary[randomCatKey][Math.floor(
        Math.random() * dictionary[randomCatKey].length)];
}

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

function newPrompt(lan, cat = false){
    const dictEntry = randomDictEntry(cat);
    const answers = [dictEntry]
    for (var i = 0; i < 4 ; i++){
        answers.push(randomDictEntry(cat));
    }
    shuffle(answers);
    const oppositeLan = lan == EN ? RE : EN;
    answers.forEach(a => {a.correct = a == dictEntry});
    exerciseContainer.innerHTML = 
    `<p>${dictEntry[lan]}</p>`;
    answers.forEach(a => {exerciseContainer.innerHTML += 
        `<button onClick="showCorrect(${a.correct ? true : false}, ${lan}, '${cat}')">${a[oppositeLan]}</button>`});
}

function showCorrect(correct, lan, cat){
    exerciseContainer.innerHTML = `<p>${correct ? 'Haaggán!' : 'Baábul.'}</p> <p>${correct ? 'Correct!' : 'Incorrect.'}</p>
    <button onClick="newPrompt(${lan}, '${cat}')">Worsí husúb - Next question</button>`;
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
    console.log(dictKeys)
    dictKeys.forEach(k => exerciseContainer.innerHTML += 
        `<button onClick="newPrompt(${lan}, '${k}')">${k}</button>`);
}