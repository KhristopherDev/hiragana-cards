const LevelCount = 17;

if (!localStorage.getItem("FirstTimeRunning")) {
    console.log("FirstTimeRunning not find. Creating localstorage.")
    localStorage['FirstTimeRunning'] = true;
}else {
    let existCheck;
    for(let j = 0; j < LevelCount + 1; j++) {
        console.log("Checking level "+j+"...")
        existCheck = localStorage.getItem('Level'+j+'Points');
        if (!existCheck){
            console.log("Level "+j+" Not finded. SettingUp")
            localStorage['Level'+j+'Points'] = 0
        }
    }
    console.log("All levels present.")
}

if(!localStorage.getItem('coins')) {
    console.log("coins not find. Creating localstorage.")
    localStorage['coins'] = 0;
}

if(localStorage['FirstTimeRunning'] === 'true') {
    if(window.confirm(`Welcome to the Katakana learning place! First of all, i need to question you, you need a guide?`)){
        window.alert(`First, i need to explain you to use this site. The purpose of learn japanese with cards is to memorize with repetition based method. You'll need to miss and be right a lot, but don't worry, it don't take much time!`);
        window.alert(`Now, you'll need to get some tips at the beggining. You can try it by clicking at the card and flipping it! But you'll get much less points.`);
        window.alert(`After some 'tipped' attempts, try to make it yourself by writing the answer in the text box! The hiragana write system is the first step to learn japanese. It seems hard, but i promise, the more you repeat, better and faster you'll be reading these symbols! That is it, good luck and thank you for using my website! Arigatōgozaimasu!`);
    }else{
        window.alert(`Have fun! Thank you for using my website!`);
    }
    console.log("Type of FTR: "+typeof(localStorage['FirstTimeRunning']))
    console.log("First time running. Setting up points and level.")
    localStorage['savedLevel'] = 0;
    localStorage['previousNum'] = 0;
    for(let j = 0; j < LevelCount + 1; j++) {
        console.log("Setting up level "+j+"...")
        localStorage['Level'+j+'Points'] = 0
    }
    console.log("Finished. Setting FirstTimeRunning to false.")
    localStorage['FirstTimeRunning'] = false
}


let charDB = {
    level0: {
        hiragana: ['あ', 'え', 'い', 'お', 'う'], alpha: ['a', 'e', 'i', 'o', 'u'], points: Math.floor(localStorage['Level0Points']), levelName: "vowels"
    },
    level1: {
        hiragana: ['か', 'き', 'く', 'け', 'こ'], alpha: ['ka', 'ki', 'ku', 'ke', 'ko'], points: Math.floor(localStorage['Level1Points']), levelName: "K"
    },
    level2: {
        hiragana: ['さ', 'し', 'す', 'せ', 'そ'], alpha: ['sa', 'shi', 'su', 'se', 'so'], points: Math.floor(localStorage['Level2Points']), levelName: "S"
    },
    level3: {
        hiragana: ['た', 'ち', 'つ', 'て', 'と'], alpha: ['ta', 'chi', 'tsu', 'te', 'to'], points: Math.floor(localStorage['Level3Points']), levelName: "T"
    },
    level4: {
        hiragana: ['な', 'に', 'ぬ', 'ね', 'の'], alpha: ['na', 'ni', 'nu', 'ne', 'no'], points: Math.floor(localStorage['Level4Points']), levelName: "N"
    },
    level5: {
        hiragana: ['は', 'ひ', 'ふ', 'へ', 'ほ'], alpha: ['ha', 'hi', 'fu', 'he', 'ho'], points: Math.floor(localStorage['Level5Points']), levelName: "H"
    },
    level6: {
        hiragana: ['ま', 'み', 'む', 'め', 'も'], alpha: ['ma', 'mi', 'mu', 'me', 'mo'], points: Math.floor(localStorage['Level6Points']), levelName: "M"
    },
    level7: {
        hiragana: ['や', 'ゆ', 'よ'], alpha: ['ya', 'yu', 'yo'], points: Math.floor(localStorage['Level7Points']), levelName: "Y"
    },
    level8: {
        hiragana: ['ら', 'り', 'る', 'れ', 'ろ'], alpha: ['ra', 'ri', 'ru', 're', 'ro'], points: Math.floor(localStorage['Level8Points']), levelName: "R"
    },
    level9: {
        hiragana: ['わ', 'を', 'ん'], alpha: ['wa', 'wo', 'n'], points: Math.floor(localStorage['Level9Points']), levelName: "W"
    },
    level10: {
        hiragana: ['が', 'ぎ', 'ぐ', 'げ', 'ご'], alpha: ['ga', 'gi', 'gu', 'ge', 'go'], points: Math.floor(localStorage['Level10Points']), levelName: "G"
    },
    level11: {
        hiragana: ['ざ', 'じ', 'ず', 'ぜ', 'ぞ'], alpha: ['za', 'ji', 'zu', 'ze', 'zo'], points: Math.floor(localStorage['Level11Points']), levelName: "Z"
    },
    level12: {
        hiragana: ['だ', 'ぢ', 'づ', 'で', 'ど'], alpha: ['da', 'ji', 'zu', 'de', 'do'], points: Math.floor(localStorage['Level12Points']), levelName: "D"
    },
    level13: {
        hiragana: ['ば', 'び', 'ぶ', 'べ', 'ぼ'], alpha: ['ba', 'bi', 'bu', 'be', 'bo'], points: Math.floor(localStorage['Level13Points']), levelName: "B"
    },
    level14: {
        hiragana: ['ぱ', 'ぴ', 'ぷ', 'ぺ', 'ぽ'], alpha: ['pa', 'pi', 'pu', 'pe', 'po'], points: Math.floor(localStorage['Level14Points']), levelName: "P"
    },
    level15: {
        hiragana: [
            'きゃ', 'きゅ', 'きょ',
            'しゃ', 'しゅ', 'しょ',
            'ちゃ', 'ちゅ', 'ちょ',
            'にゃ', 'にゅ', 'にょ',
            'ひゃ', 'ひゅ', 'ひょ',
            'みゃ', 'みゅ', 'みょ',
            'りゃ', 'りゅ', 'りょ',
            'ぎゃ', 'ぎゅ', 'ぎょ',
            'じゃ', 'じゅ', 'じょ',
            'ぢゃ', 'ぢゅ', 'ぢょ',
            'びゃ', 'びゅ', 'びょ',
            'ぴゃ', 'ぴゅ', 'ぴょ'
        ],
        alpha: [
            'kya', 'kyu', 'kyo',
            'sha', 'shu', 'sho',
            'cha', 'chu', 'cho',
            'nya', 'nyu', 'nyo',
            'hya', 'hyu', 'hyo',
            'mya', 'myu', 'myo',
            'rya', 'ryu', 'ryo',
            'gya', 'gyu', 'gyo',
            'ja', 'ju', 'jo',
            'ja', 'ju', 'jo', // corresponde a ぢゃ, ぢゅ, ぢょ
            'bya', 'byu', 'byo',
            'pya', 'pyu', 'pyo'
        ],
        points: Math.floor(localStorage['Level15Points']),
        levelName: "Modifiers"
    },
    level16: {
        hiragana: ['あ-お','く-へ','さ-ち','つ-う','ね-れ','な-は'], alpha: ['a-o','ku-he','sa-chi','tsu-u','ne-re','na-ha'], points: Math.floor(localStorage['Level16Points']), levelName: "the-twins"
    },
    level17: {
        hiragana: [
            "あ", "い", "う", "え", "お",
            "か", "き", "く", "け", "こ",
            "さ", "し", "す", "せ", "そ",
            "た", "ち", "つ", "て", "と",
            "な", "に", "ぬ", "ね", "の",
            "は", "ひ", "ふ", "へ", "ほ",
            "ま", "み", "む", "め", "も",
            "や", "ゆ", "よ",
            "ら", "り", "る", "れ", "ろ",
            "わ", "を", "ん",
            "が", "ぎ", "ぐ", "げ", "ご",
            "ざ", "じ", "ず", "ぜ", "ぞ",
            "だ", "ぢ", "づ", "で", "ど",
            "ば", "び", "ぶ", "べ", "ぼ",
            "ぱ", "ぴ", "ぷ", "ぺ", "ぽ",
            'きゃ', 'きゅ', 'きょ',
            'しゃ', 'しゅ', 'しょ',
            'ちゃ', 'ちゅ', 'ちょ',
            'にゃ', 'にゅ', 'にょ',
            'ひゃ', 'ひゅ', 'ひょ',
            'みゃ', 'みゅ', 'みょ',
            'りゃ', 'りゅ', 'りょ',
            'ぎゃ', 'ぎゅ', 'ぎょ',
            'じゃ', 'じゅ', 'じょ',
            'ぢゃ', 'ぢゅ', 'ぢょ',
            'びゃ', 'びゅ', 'びょ',
            'ぴゃ', 'ぴゅ', 'ぴょ'
        ],
        alpha: [
            "a", "i", "u", "e", "o",
            "ka", "ki", "ku", "ke", "ko",
            "sa", "shi", "su", "se", "so",
            "ta", "chi", "tsu", "te", "to",
            "na", "ni", "nu", "ne", "no",
            "ha", "hi", "fu", "he", "ho",
            "ma", "mi", "mu", "me", "mo",
            "ya", "yu", "yo",
            "ra", "ri", "ru", "re", "ro",
            "wa", "wo", "n",
            "ga", "gi", "gu", "ge", "go",
            "za", "ji", "zu", "ze", "zo",
            "da", "ji", "zu", "de", "do",
            "ba", "bi", "bu", "be", "bo",
            "pa", "pi", "pu", "pe", "po",
            'kya', 'kyu', 'kyo',
            'sha', 'shu', 'sho',
            'cha', 'chu', 'cho',
            'nya', 'nyu', 'nyo',
            'hya', 'hyu', 'hyo',
            'mya', 'myu', 'myo',
            'rya', 'ryu', 'ryo',
            'gya', 'gyu', 'gyo',
            'ja', 'ju', 'jo',
            'ja', 'ju', 'jo', // corresponde a ぢゃ, ぢゅ, ぢょ
            'bya', 'byu', 'byo',
            'pya', 'pyu', 'pyo'
        ],
        points: localStorage['Level17Points'],
        levelName: "All"
    }
};

let Level = Math.floor(localStorage['savedLevel']);
let selectedLevel = "level" + Level;
let saveLvlPoints = 'Level'+Level+'Points';
let currentPoints = charDB[selectedLevel].points;
let lettersLenght = charDB[selectedLevel].hiragana.length;
let isFlipped = false;
let getTip = false;
let canRespond = true;
let passClassOffset = 20;
let randNum = Math.floor(Math.random() * lettersLenght);
let letterTrack = console.log(selectedLevel + " | " + "Case " + randNum + " | " + " Hiragana: " + charDB[selectedLevel].hiragana[randNum] + "|" + charDB[selectedLevel].alpha[randNum]);
let missWeight = 1;

while (localStorage['previousNum'] == randNum) {
    randNum = Math.floor(Math.random() * lettersLenght);
    console.log("randNum got same value as the previous. Trying to randomize again.");
}

localStorage['previousNum'] = randNum;

const frontCard = document.getElementById("frontCard");
const backCard = document.getElementById("backCard");
const cardBox = document.getElementById("card-box");
const answer = document.getElementById("answer");
const response = document.getElementById("response");
const displayPoints = document.getElementById("displayPoints");
const displayClass = document.getElementById("displayClass");
const resetBtn = document.getElementById("reset");
const levelDisplay = document.getElementById("levelDisplay");
const previousLevel = document.getElementById("PreviousLevel");
const nextLevel = document.getElementById("NextLevel");
const correctSnd = new Audio("./assets/correct.wav");
const wrongSnd = new Audio("./assets/wrong.wav");
const whySnd = new Audio("./assets/why.wav");
const flipSnd = new Audio("./assets/flipcard.mp3");

wrongSnd.volume = 1;
correctSnd.volume = 1;
flipSnd.volume = 0.05;

function randomize() {
    localStorage['previousNum'] = randNum;
    while (localStorage['previousNum'] == randNum) {
        randNum = Math.floor(Math.random() * lettersLenght);
        console.log("randNum got same value as the previous. Trying to randomize again.");
    }
    console.clear(letterTrack);
    letterTrack = console.log(selectedLevel + " | " + "Case " + randNum + " | " + " Hiragana: " + charDB[selectedLevel].hiragana[randNum] + "|" + charDB[selectedLevel].alpha[randNum]);
}

function addPoints(p,isNull){
    p = Math.floor(p);
    isNull = typeof(p) == Number;
    if (!isNull){
        p = 999;
    }
    console.log("Requisited Points: " + p);
    charDB[selectedLevel].points = Math.floor(charDB[selectedLevel].points + p);
    currentPoints = charDB[selectedLevel].points;
    saveLvlPoints = 'Level'+Level+'Points';
    localStorage[saveLvlPoints] = currentPoints;
    console.log("Currrent points now: " + currentPoints);
}

function rmvPoints(p){
    p = Math.floor(p);
    console.log("Requisited Points: " + p)
    charDB[selectedLevel].points = Math.floor(charDB[selectedLevel].points - p);
    currentPoints = charDB[selectedLevel].points;
    saveLvlPoints = 'Level'+Level+'Points';
    localStorage[saveLvlPoints] = currentPoints;
    console.log("Currrent points now: " + currentPoints);
    displayPoints.innerHTML = "Points: " + currentPoints;
}

function setClass() { 
    if(currentPoints <= passClassOffset || currentPoints > passClassOffset && currentPoints < passClassOffset) {
        displayClass.innerHTML = "Novice";
        displayClass.style.color = "grey";
        missWeight = 1;
    }
    if(currentPoints >= passClassOffset){
        displayClass.innerHTML = "Apprentice";
        displayClass.style.color = "black";
        missWeight = 2;
    }
    if(currentPoints >= passClassOffset * 4){
        displayClass.innerHTML = "Advanced";
        displayClass.style.color = "yellow";
        missWeight = 4;
    }
    if(currentPoints >= passClassOffset * 8){
        displayClass.innerHTML = "master";
        displayClass.style.color = "purple";
        missWeight = 8;
    }
    if(currentPoints >= passClassOffset * 16){
        displayClass.innerHTML = "Legendary";
        displayClass.style.color = "green";
        missWeight = 16;
    }
    if(currentPoints >= passClassOffset * 32){
        displayClass.innerHTML = "Transcendent";
        displayClass.style.color = "red";
        missWeight = 32;
    }
    if(g = String(currentPoints).includes('69')){
        displayClass.innerHTML = "( ͡° ͜ʖ ͡°)";
        displayClass.style.color = "red";
    }
}

function respondFunc() {
    answer.setAttribute("disabled", "");
    flip(); 
    let resetInterval = setInterval(()=>{  
        flip(); 
        let flipInterval = setInterval(()=>{
            randomize();
            frontCard.innerHTML = "<p>" + charDB[selectedLevel].hiragana[randNum] + "</p>";
            backCard.innerHTML = "<p>" + charDB[selectedLevel].alpha[randNum] + "</p>";
            answer.value = '';
            response.style.opacity = 0;
            response.style.color = "grey";
            response.innerHTML = "Nothing";
            canRespond = true;
            answer.removeAttribute("disabled", "");
            answer.focus();
            clearInterval(flipInterval);
        },180);
        clearInterval(resetInterval);
    }, 1500);
}

function changueLevel(value){
    //1 = add 0 = minus
    if (!isFlipped) {
        if (value === 1 && Level < LevelCount && canRespond) {
            Level++;
            selectedLevel = "level" + Level;
            currentPoints = charDB[selectedLevel].points;
            lettersLenght = charDB[selectedLevel].hiragana.length;
            randomize();
            frontCard.innerHTML = "<p>" + charDB[selectedLevel].hiragana[randNum] + "</p>";
            backCard.innerHTML = "<p>" + charDB[selectedLevel].alpha[randNum] + "</p>";
            if (charDB[selectedLevel].levelName == 'vowels') {
                levelDisplay.innerHTML = "Learning " + charDB[selectedLevel].levelName;
            }else{
                levelDisplay.innerHTML = "Learning " + charDB[selectedLevel].levelName + " letters";
            }
            if (charDB[selectedLevel].levelName == 'the-twins') {
                frontCard.style.fontSize = "7rem"
                backCard.style.fontSize = "7rem"
            }else{
                frontCard.style.fontSize = "10rem"
                backCard.style.fontSize = "10rem"
            }
        }
        if (value === 0 && Level > 0 && canRespond) {
            Level--;
            selectedLevel = "level" + Level;
            currentPoints = charDB[selectedLevel].points;
            lettersLenght = charDB[selectedLevel].hiragana.length;
            randomize();
            frontCard.innerHTML = "<p>" + charDB[selectedLevel].hiragana[randNum] + "</p>";
            backCard.innerHTML = "<p>" + charDB[selectedLevel].alpha[randNum] + "</p>";
            if (charDB[selectedLevel].levelName == 'vowels') {
                levelDisplay.innerHTML = "Learning " + charDB[selectedLevel].levelName;
            }else{
                levelDisplay.innerHTML = "Learning " + charDB[selectedLevel].levelName + " letters";
            }
            if (charDB[selectedLevel].levelName == 'the-twins') {
                frontCard.style.fontSize = "7rem"
                backCard.style.fontSize = "7rem"
            }else{
                frontCard.style.fontSize = "10rem"
                backCard.style.fontSize = "10rem"
            }
        }
        localStorage['savedLevel'] = Level;
    }else{
        response.style.opacity = 1;
        response.style.color = "grey";
        response.innerHTML = "Flip the card!";
        let sayToFlip = setInterval(() => {
            response.style.opacity = 0;
            response.style.color = "";
            response.innerHTML = "a";
            clearInterval(sayToFlip);
        }, 500);
    }
}

function flip() {
    if (!isFlipped) {
        frontCard.classList.add("flip");
        frontCard.style.zIndex = "0";
        backCard.style.zIndex = "1";
        isFlipped = true;

        let flipTimer = setInterval(() => {
            frontCard.style.transform = "scaleX(0)";
            frontCard.classList.remove("flip");
            backCard.classList.add("unflip");
            clearInterval(flipTimer);
        }, 180);
        let unflipTimer = setInterval(() => {
            backCard.style.transform = "scaleX(1)";
            backCard.classList.remove("unflip");
            clearInterval(unflipTimer);
        }, 360);
    }else{
        backCard.classList.add("flip");
        backCard.style.zIndex = "0";
        frontCard.style.zIndex = "1";
        isFlipped = false;

        let flipTimer = setInterval(() => {
            backCard.style.transform = "scaleX(0)";
            backCard.classList.remove("flip");
            frontCard.classList.add("unflip");
            clearInterval(flipTimer);
        }, 180);
        let unflipTimer = setInterval(() => {
            frontCard.style.transform = "scaleX(1)";
            frontCard.classList.remove("unflip");
            clearInterval(unflipTimer);
        }, 360);
    }
    flipSnd.play();
}

let setPoints = setInterval(()=>{
    currentPoints = charDB[selectedLevel].points;
    displayPoints.innerHTML = "Points: " + currentPoints;
    setClass();
    if(Level == 0) {
        previousLevel.setAttribute("disabled", "")
    }else{
        previousLevel.removeAttribute("disabled", "");
    }
    if(Level === LevelCount){
        nextLevel.setAttribute("disabled", "");
    }else{
        if (currentPoints < 20) {
            nextLevel.setAttribute("disabled", "");
        }else{
            nextLevel.removeAttribute("disabled", "");
        }
    }
}, 100);



frontCard.innerHTML = "<p>" + charDB[selectedLevel].hiragana[randNum] + "</p>";
backCard.innerHTML = "<p>" + charDB[selectedLevel].alpha[randNum] + "</p>";

if (charDB[selectedLevel].levelName == 'the-twins') {
    frontCard.style.fontSize = "7rem"
    backCard.style.fontSize = "7rem"
}else{
    frontCard.style.fontSize = "10rem"
    backCard.style.fontSize = "10rem"
}

 if (charDB[selectedLevel].levelName == 'vowels') {
     levelDisplay.innerHTML = "Learning " + charDB[selectedLevel].levelName;
 }else{
     levelDisplay.innerHTML = "Learning " + charDB[selectedLevel].levelName + " letters";
 }
 answer.focus();

cardBox.addEventListener('click', ()=>{
    console.log("Yo, i'm listening!");
    getTip = true;
    flip();
    answer.focus();
})

answer.addEventListener('keydown', (e, verif)=> {
    if(canRespond) {
        if (e.key === 'Enter' && !isFlipped) {
            console.log('Gotcha. Value: ' + e.key);
            verif = answer.value === charDB[selectedLevel].alpha[randNum];
            if (getTip && verif) {
                verif = 'tippedTrue';
            }
            if (getTip && !verif) {
                verif = 'tippedFalse';
            }
            switch(verif){
                case true:
                    if(missWeight > 2) {
                        charDB[selectedLevel].points+= Math.floor(missWeight * 0.8);
                    }else{
                        charDB[selectedLevel].points+=missWeight;
                    }
                    saveLvlPoints = 'Level' + Level + 'Points';
                    currentPoints = charDB[selectedLevel].points;
                    localStorage[saveLvlPoints] = charDB[selectedLevel].points;
                    displayPoints.innerHTML = "Points: " + currentPoints;
                    response.style.opacity = 1;
                    response.style.color = "green";
                    response.innerHTML = "Correct!";
                    console.log('Correct!');
                    canRespond = false;
                    answer.setAttribute("disabled", "");
                    respondFunc();
                    correctSnd.play();
                break;
                case false:
                    charDB[selectedLevel].points-=missWeight;
                    saveLvlPoints = 'Level' + Level + 'Points';
                    currentPoints = charDB[selectedLevel].points;
                    localStorage[saveLvlPoints] = charDB[selectedLevel].points;
                    displayPoints.innerHTML = "Points: " + currentPoints;
                    response.style.opacity = 1;
                    response.style.color = "red";
                    response.innerHTML = "Wrong...";
                    console.log('Wrong...');
                    canRespond = false;
                    answer.setAttribute("disabled", "");
                    respondFunc();
                    wrongSnd.play();
                break;
                case 'tippedTrue':
                    response.style.opacity = 1;
                    response.style.color = "green";
                    response.innerHTML = "Correct!... But you tipped.";
                    charDB[selectedLevel].points+=0.5;
                    console.log('Correct!');
                    canRespond = false;
                    answer.setAttribute("disabled", "");
                    respondFunc();
                    console.log('Correct!... But you tipped.');
                    getTip = false;
                    whySnd.play();
                break;
                case 'tippedFalse':
                    charDB[selectedLevel].points = charDB[selectedLevel].points - 5;
                    currentPoints = charDB[selectedLevel].points;
                    displayPoints.innerHTML = "Points: " + currentPoints;
                    saveLvlPoints = 'Level' + Level + 'Points';
                    localStorage[saveLvlPoints] = charDB[selectedLevel].points;
                    response.style.opacity = 1;
                    response.style.color = "darkred";
                    response.innerHTML = "Why you missed?";
                    console.log('Why?');
                    canRespond = false;
                    answer.setAttribute("disabled", "");
                    respondFunc();
                    console.log('Whay?... You tipped.');
                    getTip = false;
                    whySnd.play();
                break;
            }
        }else{
            if(e.key === 'Enter' && isFlipped){
                response.style.opacity = 1;
                response.style.color = "grey";
                response.innerHTML = "Flip the card!";
                let sayToFlip = setInterval(() => {
                    response.style.opacity = 0;
                    response.style.color = "";
                    response.innerHTML = "a";
                    clearInterval(sayToFlip);
                }, 500);
            }
        }
    }
})

resetBtn.addEventListener('click', (r)=>{
    r = window.prompt("Are you sure that you wanna lose all your data? It will be gone forever (A very long time). If yes, type 'Yes'")
    if (r === 'Yes') {
        localStorage.clear();
        location.reload();
    }
})


nextLevel.addEventListener('click', ()=>{changueLevel(1)})
previousLevel.addEventListener('click', ()=>{changueLevel(0)})
guideBtn.addEventListener('click', ()=>{
    if(window.confirm(`You need a guide?`)){
        window.alert(`First, i need to explain you to use this site. The purpose of learn japanese with cards is to memorize with repetition based method. You'll need to miss and be right a lot, but don't worry, it don't take much time!`);
        window.alert(`Now, you'll need to get some tips at the beggining. You can try it by clicking at the card and flipping it! But you'll get much less points.`);
        window.alert(`After some 'tipped' attempts, try to make it yourself by writing the answer in the text box! The hiragana write system is the first step to learn japanese. It seems hard, but i promise, the more you repeat, better and faster you'll be reading these symbols! That is it, good luck and thank you for using my website! Arigatōgozaimasu!`);
    }
});