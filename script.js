// 訪問計數器
let visitCount = localStorage.getItem("visitCount") || 0;
visitCount++;
localStorage.setItem("visitCount", visitCount);
document.getElementById("visit-counter").innerText = `訪問人次：${visitCount}`;

// Level 對應的字母資料
const levelData = {
  1: {
    letterSet: [
      'Aa', 'Bb', 'Cc', 'Dd', 'Ee', 'Ff', 'Gg', 'Hh', 'Ii',
      'Jj', 'Kk', 'Ll', 'Mm', 'Nn', 'Oo', 'Pp', 'Qq', 'Rr',
      'Ss', 'Tt', 'Uu', 'Vv', 'Ww', 'Xx', 'Yy', 'Zz'
    ],
    useSpeech: true
  },
  2: {
    set1: ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'w', 'y', 'z'],
    set2: ['a', 'e', 'i', 'o', 'u'],
    set3: ['b', 'c', 'd', 'ff', 'g', 'ck', 'll', 'm', 'n', 'p', 's', 'ss', 't', 'v', 'x', 'z'],
    useSpeech: false
  },
  3: {
    set1: ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'w', 'y', 'z'],
    set2: ['a', 'e', 'i', 'o', 'u'],
    set3: ['be', 'b', 'ce', 'c', 'de', 'd', 'fe', 'ff', 'ge', 'g', 'ke', 'ck', 'le', 'll', 'me', 'm',
           'ne', 'n', 'pe', 'p', 'se', 's', 'ss', 'te', 't', 've', 'v', 'x', 'ze', 'z'],
    useSpeech: false
  },
  4: {
    set1: ['b', 'bl', 'br', 'c', 'cl', 'cr', 'd', 'dr', 'f', 'fl', 'fr', 'g', 'gl', 'gr', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'pl', 'pr', 'r', 's', 'sl', 'st', 'sc', 'sk', 'sm', 'sn', 'sw', 't', 'tr', 'v', 'w', 'y', 'z'],
    set2: ['a', 'e', 'i', 'o', 'u'],
    set3: ['mb', 'bt', 'nd', 'nt', 'mp', 'th', 'nk', 'be', 'b', 'ce', 'c', 'de', 'd', 'fe', 'ff',
           'ge', 'g', 'ke', 'ck', 'le', 'll', 'me', 'm', 'ne', 'n', 'pe', 'p', 'se', 's', 'ss',
           'te', 't', 've', 'v', 'x', 'ze', 'z', 'zz'],
    useSpeech: false
  },
  5: {
    set1: ['b', 'bl', 'br', 'c', 'cl', 'cr', 'd', 'dr', 'dw', 'f', 'fl', 'fr', 'g', 'gl', 'gr', 'gh', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'pl', 'pr', 'r', 's', 'squ', 'sl', 'st', 'sc', 'sk', 'sm', 'sn', 'sw', 't', 'tr', 'tw', 'ts', 'v', 'w', 'y', 'z'],
    set2: ['a', 'e', 'i', 'o', 'u', 'ai', 'ao', 'au', 'ea', 'ee', 'ei', 'eo', 'eu', 'ia', 'ie', 'io', 'iu', 'oa', 'oo', 'oi', 'ou'],
    set3: ['gh', 'ld', 'tch', 'dge', 'mb', 'bt', 'nd', 'nt', 'mp', 'th', 'nk', 'be', 'b', 'ce', 'c', 'de', 'd',
           'fe', 'ff', 'ge', 'g', 'ke', 'ck', 'le', 'll', 'me', 'm', 'ne', 'n', 'pe', 'p', 'se', 's', 'ss',
           'te', 't', 've', 'v', 'x', 'ze', 'z', 'zz'],
    useSpeech: false
  },
  6: {
    set1: ['scr', 'sch', 'str', 'spl', 'wh', 'ch', 'th', 'ph', 'sh', 'qu', 'b', 'bl', 'br', 'c', 'cl', 'cr', 'd', 'dr', 'dw', 'f', 'fl', 'fr', 'g', 'gl', 'gr', 'gh', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'pl', 'pr', 'r', 's', 'squ', 'sl', 'st', 'sc', 'sk', 'sm', 'sn', 'sw', 't', 'tr', 'tw', 'ts', 'v', 'w', 'y', 'z'],
    set2: ['a', 'e', 'i', 'o', 'u', 'ai', 'ao', 'au', 'ea', 'ee', 'ei', 'eo', 'eu', 'ia', 'ie', 'io', 'iu', 'oa', 'oo', 'oi', 'ou'],
    set3: ['r', 'l', 'w', 'y', 'gh', 'ch', 'sh', 'ph', 'ld', 'tch', 'dge', 'mb', 'bt', 'nd', 'nt', 'mp', 'th', 'nk', 'be', 'b', 'ce', 'c', 'de', 'd',
           'fe', 'ff', 'ge', 'g', 'ke', 'ck', 'le', 'll', 'me', 'm', 'ne', 'n', 'pe', 'p', 'se', 's', 'ss', 'te', 't', 've', 'v', 'x', 'ze', 'z', 'zz'],
    useSpeech: false
  },
  7: {
    set1: ['scr', 'sch', 'str', 'spl', 'wh', 'ch', 'th', 'ph', 'sh', 'qu', 'b', 'bl', 'br', 'c', 'cl', 'cr', 'd', 'dr', 'dw', 'f', 'fl', 'fr', 'g', 'gl', 'gr', 'gh', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'pl', 'pr', 'r', 's', 'squ', 'sl', 'st', 'sc', 'sk', 'sm', 'sn', 'sw', 't', 'tr', 'tw', 'ts', 'v', 'w', 'y', 'z'],
    set2: ['a', 'e', 'i', 'o', 'u', 'ai', 'ao', 'au', 'ea', 'ee', 'ei', 'eo', 'eu', 'ia', 'ie', 'io', 'iu', 'oa', 'oo', 'oi', 'ou'],
    set3: ['cy', 'dy', 'fy', 'gy', 'ky', 'ly', 'my', 'ny', 'py', 'ry', 'sy', 'ty', 'vy', 'wy', 'xy', 'zy', 'dle', 'cle', 'tle', 'ple', 'cial', 'tial', 'tion', 'dual', 'cious', 'ture', 'gia', 'tious', 'lious',
           'r', 'l', 'w', 'y', 'gh', 'ch', 'sh', 'ph', 'ld', 'tch', 'dge', 'mb', 'bt', 'nd', 'nt', 'mp', 'th', 'nk', 'be', 'b', 'ce', 'c', 'de', 'd',
           'fe', 'ff', 'ge', 'g', 'ke', 'ck', 'le', 'll', 'me', 'm', 'ne', 'n', 'pe', 'p', 'se', 's', 'ss', 'te', 't', 've', 'v', 'x', 'ze', 'z', 'zz'],
    useSpeech: false
  }
};

// 隨機取值
function getRandomFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// 點擊產生按鈕
function generateLetters(level) {
  const data = levelData[level];
  if (level === 1) {
    document.getElementById(`letter-box-${level}`).innerText = getRandomFromArray(data.letterSet);
  } else {
    document.getElementById(`box-${level}-1`).innerText = getRandomFromArray(data.set1);
    document.getElementById(`box-${level}-2`).innerText = getRandomFromArray(data.set2);
    document.getElementById(`box-${level}-3`).innerText = getRandomFromArray(data.set3);
  }
}

// 語音辨識（只用於 Level 1）
function startSpeechRecognition(level) {
  const expected = document.getElementById(`letter-box-${level}`).innerText.toLowerCase();
  const resultEl = document.getElementById(`result-${level}`);

  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'en-US';
  recognition.interimResults = false;

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript.toLowerCase();
    if (transcript.includes(expected)) {
      resultEl.innerText = `✅ 正確：${transcript}`;
    } else {
      resultEl.innerText = `❌ 錯誤，辨識為：${transcript}`;
    }
  };

  recognition.onerror = () => {
    resultEl.innerText = "⚠️ 語音辨識錯誤，請重試";
  };

  recognition.start();
}
