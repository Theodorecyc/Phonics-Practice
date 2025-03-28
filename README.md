<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Phonics Level 1</title>
    <style>
        body { 
            font-family: Arial, sans-serif; 
            text-align: center; 
            margin-top: 50px; 
            position: relative;
        }
        .logo {
            width: 150px;
            margin-bottom: 10px;
        }
        .box { 
            font-size: 40px; 
            font-weight: bold; 
            border: 2px solid #000; 
            width: 100px; 
            height: 100px; 
            margin: 20px auto; 
            display: flex; 
            align-items: center; 
            justify-content: center; 
        }
        .correct { color: green; }
        .incorrect { color: red; }
        .input-section { margin-bottom: 20px; }
        .partner-section {
            position: fixed;
            right: 20px;
            top: 50px;
            text-align: center;
        }
        .partner-logo {
            width: 100px;
            margin-top: 10px;
        }
    </style>
</head>
<body>

    <!-- 公司 LOGO -->
    <img src="logo.png" alt="公司 Logo" class="logo">

    <h1>Phonics Level 1</h1>

    <!-- 訪問計數器 -->
    <p>網站訪問次數：<span id="visitCount">0</span></p>

    <!-- 使用者姓名輸入欄 -->
    <div class="input-section">
        <label for="username">請輸入您的姓名：</label>
        <input type="text" id="username" placeholder="您的姓名">
    </div>

    <div class="box" id="letterBox">?</div>
    <button onclick="generateLetter()">隨機產生字母</button>
    <button onclick="startSpeechRecognition()">開始語音辨識</button>
    
    <p id="result"></p>
    <p id="score">正確率: 0% (0/0)</p>

    <!-- 中國大陸地區合作夥伴 -->
    <div class="partner-section">
        <p>中國大陸地區合作夥伴</p>
        <img src="partner.png" alt="合作夥伴 Logo" class="partner-logo">
    </div>

    <script>
        const letters = ["Aa", "Bb", "Cc", "Dd", "Ee", "Ff", "Gg", "Hh", "Ii", "Jj", "Kk", "Ll", "Mm", "Nn", "Oo", "Pp", "Qq", "Rr", "Ss", "Tt", "Uu", "Vv", "Ww", "Xx", "Yy", "Zz"];
        let currentLetter = "";
        let correctCount = 0;
        let totalCount = 0;

        function generateLetter() {
            const randomIndex = Math.floor(Math.random() * letters.length);
            currentLetter = letters[randomIndex];
            document.getElementById("letterBox").textContent = currentLetter;
            document.getElementById("result").textContent = "";
        }

        function startSpeechRecognition() {
            if (!window.SpeechRecognition && !window.webkitSpeechRecognition) {
                alert("您的瀏覽器不支援語音辨識");
                return;
            }

            const username = document.getElementById("username").value.trim();
            if (!username) {
                alert("請先輸入您的姓名");
                return;
            }

            const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
            recognition.lang = "en-US";
            recognition.start();

            recognition.onresult = function(event) {
                const spokenWord = event.results[0][0].transcript.trim();
                const resultElement = document.getElementById("result");

                totalCount++; // 總測試次數 +1
                if (spokenWord.toLowerCase() === currentLetter[0].toLowerCase()) {
                    correctCount++; // 正確次數 +1
                    resultElement.textContent = `${username}，正確！你說的是: ${spokenWord}`;
                    resultElement.className = "correct";
                } else {
                    resultElement.textContent = `${username}，錯誤！你說的是: ${spokenWord}`;
                    resultElement.className = "incorrect";
                }

                updateScore(); // 更新正確率
            };

            recognition.onerror = function() {
                alert("語音辨識發生錯誤，請重試");
            };
        }

        function updateScore() {
            const scoreElement = document.getElementById("score");
            const accuracy = ((correctCount / totalCount) * 100).toFixed(2); // 計算正確率，取小數點後兩位
            scoreElement.textContent = `正確率: ${accuracy}% (${correctCount}/${totalCount})`;
        }

        // 訪問計數器
        function updateVisitCount() {
            let count = localStorage.getItem("visitCount");
            count = count ? parseInt(count) + 1 : 1;
            localStorage.setItem("visitCount", count);
            document.getElementById("visitCount").textContent = count;
        }

        // 當網頁載入時更新訪問計數
        window.onload = updateVisitCount;
    </script>

</body>
</html>
