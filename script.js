// 存放 Level 1 所需的字母
const letters = ["Aa", "Bb", "Cc", "Dd", "Ee", "Ff", "Gg", "Hh", "Ii", "Jj", "Kk", "Ll", "Mm", "Nn", "Oo", "Pp", "Qq", "Rr", "Ss", "Tt", "Uu", "Vv", "Ww", "Xx", "Yy", "Zz"];

let currentLetter = "";
let correctCount = 0;
let totalCount = 0;

// 產生隨機字母
function generateLetter() {
    const randomIndex = Math.floor(Math.random() * letters.length);
    currentLetter = letters[randomIndex];
    document.getElementById("letterBox").textContent = currentLetter;
    document.getElementById("result").textContent = ""; // 清空結果
}

// 開始語音辨識
function startSpeechRecognition() {
    if (!window.SpeechRecognition && !
