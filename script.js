// 初始化變數
let visitorCount = 0;  // 訪問人次

// 隨機字母生成
const letters1 = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'w', 'y', 'z'];
const letters2 = ['a', 'e', 'i', 'o', 'u'];
const letters3 = ['b', 'c', 'd', 'ff', 'g', 'ck', 'll', 'm', 'n', 'p', 's', 'ss', 't', 'v', 'x', 'z'];

// 按下 "產生字母" 按鈕時觸發
document.getElementById('generateLevel2Button').addEventListener('click', function() {
  // 隨機選擇字母並顯示
  document.getElementById('box1').innerText = letters1[Math.floor(Math.random() * letters1.length)];
  document.getElementById('box2').innerText = letters2[Math.floor(Math.random() * letters2.length)];
  document.getElementById('box3').innerText = letters3[Math.floor(Math.random() * letters3.length)];
});

// 這部分是 Web Speech API 語音辨識的基礎程式碼
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'en-US';

// 語音辨識的結果
recognition.onresult = function(event) {
  const transcript = event.results[0][0].transcript.toLowerCase();
  document.getElementById('speechResult').innerText = `辨識結果：${transcript}`;
  const box1Text = document.getElementById('box1').innerText.toLowerCase();
  const box2Text = document.getElementById('box2').innerText.toLowerCase();
  const box3Text = document.getElementById('box3').innerText.toLowerCase();

  // 比對語音辨識結果
  if (transcript === box1Text || transcript === box2Text || transcript === box3Text) {
    document.getElementById('speechResult').innerText += ' - 正確!';
  } else {
    document.getElementById('speechResult').innerText += ' - 錯誤!';
  }
};

// 按下 "開始發音" 按鈕時啟動語音辨識
document.getElementById('startSpeechButton').addEventListener('click', function() {
  recognition.start();
});

// 計數器：增加訪問人次
function incrementVisitorCount() {
  visitorCount++;
  document.getElementById('visitorCounter').innerText = `訪問人次：${visitorCount}`;
}

// 呼叫計數器
incrementVisitorCount();
