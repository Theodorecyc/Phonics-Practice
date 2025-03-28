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
  recognition
