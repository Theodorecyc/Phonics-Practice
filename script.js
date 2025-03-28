// 訪問人數計數
if (localStorage.getItem("visitCount")) {
    let count = parseInt(localStorage.getItem("visitCount"));
    count++;
    localStorage.setItem("visitCount", count);
    document.getElementById("visitCount").innerText = count;
} else {
    localStorage.setItem("visitCount", 1);
    document.getElementById("visitCount").innerText = 1;
}

// Level 1 - 產生隨機字母
const letters = ["Aa", "Bb", "Cc", "Dd", "Ee", "Ff", "Gg", "Hh", "Ii", "Jj", "Kk", "Ll", "Mm", "Nn", "Oo", "Pp", "Qq", "Rr", "Ss", "Tt", "Uu", "Vv", "Ww", "Xx", "Yy", "Zz"];
let correctCount = 0;
let totalCount = 0;
let currentLetter = "";

function generateLetter() {
    const randomIndex = Math.floor(Math.random() * letters.length);
    currentLetter = letters[randomIndex];
    document.getElementById("letterBox").innerText = currentLetter;
}

// Level 1 - 語音辨識功能
function startSpeechRecognition() {
    if (!window.SpeechRecognition && !window.webkitSpeechRecognition) {
        alert("您的瀏覽器不支援語音辨識功能，請使用 Chrome 或 Edge");
        return;
    }

    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US"; // 設定語言
    recognition.start();

    recognition.onresult = function(event) {
        let spokenWord = event.results[0][0].transcript.trim();
        document.getElementById("result").innerText = "辨識結果: " + spokenWord;

        totalCount++;
        if (spokenWord.toLowerCase() === currentLetter.toLowerCase()) {
            document.getElementById("result").className = "correct";
            correctCount++;
        } else {
            document.getElementById("result").className = "incorrect";
        }

        updateScore();
    };

    recognition.onerror = function(event) {
        document.getElementById("result").innerText = "辨識錯誤: " + event.error;
    };
}

function updateScore() {
    let accuracy = ((correctCount / totalCount) * 100).toFixed(2);
    document.getElementById("score").innerText = `正確率: ${accuracy}% (${correctCount}/${totalCount})`;
}
