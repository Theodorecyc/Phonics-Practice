// 訪問計數器（本地測試）
document.addEventListener("DOMContentLoaded", () => {
  let count = localStorage.getItem("visitCount") || 0;
  count++;
  localStorage.setItem("visitCount", count);
  document.getElementById("visit-count").textContent = count;

  createAllLevels();
});

function createAllLevels() {
  const levelsContainer = document.getElementById("levels-container");

  const levelConfigs = [
    { level: 1, letterSets: [['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']] },
    { level: 2, letterSets: [
        ['b','c','d','f','g','h','j','k','l','m','n','p','r','s','t','v','w','y','z'],
        ['a','e','i','o','u'],
        ['b','c','d','ff','g','ck','ll','m','n','p','s','ss','t','v','x','z']
      ]
    },
    { level: 3, letterSets: [
        ['b','c','d','f','g','h','j','k','l','m','n','p','r','s','t','v','w','y','z'],
        ['a','e','i','o','u'],
        ['be','b','ce','c','de','d','fe','ff','ge','g','ke','ck','le','ll','me','m','ne','n','pe','p','se','s','ss','te','t','ve','v','x','ze','z']
      ]
    },
    { level: 4, letterSets: [[],[],[]] },
    { level: 5, letterSets: [[],[],[]] },
    { level: 6, letterSets: [[],[],[]] },
    { level: 7, letterSets: [[],[],[]] },
  ];

  for (const config of levelConfigs) {
    const levelDiv = document.createElement("div");
    levelDiv.className = "level-block";
    levelDiv.innerHTML = `
      <h2>Level ${config.level}</h2>
      <div class="name-input">
        姓名：<input type="text" id="name-level-${config.level}" />
      </div>
      <div class="card-container" id="cards-level-${config.level}">
        <div class="card" id="card-${config.level}-1"></div>
        <div class="card" id="card-${config.level}-2"></div>
        <div class="card" id="card-${config.level}-3"></div>
        <button onclick="generateLetters(${config.level})">產生字母</button>
        ${config.level === 1 ? `<button onclick="startRecognition()">開始發音</button>` : ""}
      </div>
      <div id="result-level-${config.level}"></div>
    `;
    levelsContainer.appendChild(levelDiv);
  }
}

function generateLetters(level) {
  const config = {
    1: [['Aa','Bb','Cc','Dd','Ee','Ff','Gg','Hh','Ii','Jj','Kk','Ll','Mm','Nn','Oo','Pp','Qq','Rr','Ss','Tt','Uu','Vv','Ww','Xx','Yy','Zz']],
    2: [
      ['b','c','d','f','g','h','j','k','l','m','n','p','r','s','t','v','w','y','z'],
      ['a','e','i','o','u'],
      ['b','c','d','ff','g','ck','ll','m','n','p','s','ss','t','v','x','z']
    ],
    3: [
      ['b','c','d','f','g','h','j','k','l','m','n','p','r','s','t','v','w','y','z'],
      ['a','e','i','o','u'],
      ['be','b','ce','c','de','d','fe','ff','ge','g','ke','ck','le','ll','me','m','ne','n','pe','p','se','s','ss','te','t','ve','v','x','ze','z']
    ],
  };

  const letters = config[level] || [['','',''],['','',''],['','','']];
  for (let i = 0; i < 3; i++) {
    const random = letters[i][Math.floor(Math.random() * letters[i].length)] || '';
    document.getElementById(`card-${level}-${i+1}`).textContent = random;
  }
}

// 語音辨識（僅 Level 1 用）
function startRecognition() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = "en-US";
  recognition.start();

  recognition.onresult = function(event) {
    const spoken = event.results[0][0].transcript.trim().toLowerCase();
    const level = 1;
    const expected = document.getElementById(`card-${level}-1`).textContent.toLowerCase();

    const resultBox = document.getElementById(`result-level-${level}`);
    if (spoken === expected.toLowerCase()) {
      resultBox.textContent = `正確！你說的是：${spoken}`;
    } else {
      resultBox.textContent = `錯誤，你說的是：${spoken}，正確答案是：${expected}`;
    }
  };

  recognition.onerror = function(event) {
    alert("辨識錯誤：" + event.error);
  };
}
