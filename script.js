// script.js

// 訪問計數器
let visitCount = localStorage.getItem('visitCount') ? parseInt(localStorage.getItem('visitCount')) : 0;
document.getElementById('count').textContent = visitCount;

// 更新訪問計數器
function updateVisitCount() {
    visitCount++;
    localStorage.setItem('visitCount', visitCount);
    document.getElementById('count').textContent = visitCount;
}

updateVisitCount(); // 網頁加載時就更新訪問次數

// 生成隨機字母
function generateLetter(level) {
    let letters;
    switch(level) {
        case 1:
            letters = ['Aa', 'Bb', 'Cc', 'Dd', 'Ee', 'Ff', 'Gg', 'Hh', 'Ii', 'Jj', 'Kk', 'Ll', 'Mm', 'Nn', 'Oo', 'Pp', 'Qq', 'Rr', 'Ss', 'Tt', 'Uu', 'Vv', 'Ww', 'Xx', 'Yy', 'Zz'];
            break;
        case 2:
            letters = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'w', 'y', 'z'];
            break;
        case 3:
            letters = ['be', 'b', 'ce', 'c', 'de', 'd', 'fe', 'ff', 'ge', 'g', 'ke', 'ck', 'le', 'll', 'me', 'm', 'ne', 'n', 'pe', 'p'];
            break;
        // For Levels 4-7, continue adding your respective letters...
    }

    const randomLetter = letters[Math.floor(Math.random() * letters.length)];
    document.getElementById(`letters-level-${level}`).innerText = randomLetter;
}

// 語音辨識
function startRecognition(level) {
    if ('webkitSpeechRecognition' in window) {
        const recognition = new webkitSpeechRecognition();
        recognition.lang = 'en-US';
        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.onstart = function () {
            console.log("語音辨識開始...");
        };

        recognition.onresult = function (event) {
            const transcript = event.results[0][0].transcript;
            document.getElementById(`result-level-${level}`).textContent = `辨識結果：${transcript}`;
        };

        recognition.onerror = function (event) {
            document.getElementById(`result-level-${level}`).textContent = '語音辨識錯誤！';
        };

        recognition.start();
    } else {
        alert("語音辨識不支援！")
    }
}
