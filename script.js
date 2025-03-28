// 訪問計數器
let visitorCount = 0;
document.getElementById("visitorCount").innerText = visitorCount;

// 訪問計數器每次刷新增加
window.onload = function() {
  visitorCount++;
  document.getElementById("visitorCount").innerText = visitorCount;
}

// 隨機生成字母
function generateLetter(...boxes) {
  const alphabet = ['Aa', 'Bb', 'Cc', 'Dd', 'Ee', 'Ff', 'Gg', 'Hh', 'Ii', 'Jj', 'Kk', 'Ll', 'Mm', 'Nn', 'Oo', 'Pp', 'Qq', 'Rr', 'Ss', 'Tt', 'Uu', 'Vv', 'Ww', 'Xx', 'Yy', 'Zz'];
  
  boxes.forEach(boxId => {
    const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    document.getElementById(boxId).innerText = randomLetter;
  });
}

// 語音辨識
function startSpeechRecognition() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'en-US';
  
  recognition.start();
  
  recognition.onresult = function(event) {
    const userSpeech = event.results[0][0].transcript;
    document.getElementById("speechResult").innerText = `辨識結果: ${userSpeech}`;
  };
  
  recognition.onerror = function(event) {
    document.getElementById("speechResult").innerText = "語音辨識發生錯誤。";
  };
}
