<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Phonics Level 1</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; }
        .box { font-size: 40px; font-weight: bold; border: 2px solid #000; width: 100px; height: 100px; margin: 20px auto; display: flex; align-items: center; justify-content: center; }
        .correct { color: green; }
        .incorrect { color: red; }
    </style>
</head>
<body>

    <h1>Phonics Level 1</h1>
    <div class="box" id="letterBox">?</div>
    <button onclick="generateLetter()">隨機產生字母</button>
    <button onclick="startSpeechRecognition()">開始語音辨識</button>
    <p id="result"></p>

    <script>
        const letters = ["Aa", "Bb", "Cc", "Dd", "Ee", "Ff", "Gg", "Hh", "Ii", "Jj", "Kk", "Ll", "Mm", "Nn", "Oo", "Pp", "Qq", "Rr", "Ss", "Tt", "Uu", "Vv", "Ww", "Xx", "Yy", "Zz"];
        let currentLetter = "";

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
            const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
            recognition.lang = "en-US";
            recognition.start();

            recognition.onresult = function(event) {
                const spokenWord = event.results[0][0].transcript.trim();
                const resultElement = document.getElementById("result");

                if (spokenWord.toLowerCase() === currentLetter[0].toLowerCase()) {
                    resultElement.textContent = `正確！你說的是: ${spokenWord}`;
                    resultElement.className = "correct";
                } else {
                    resultElement.textContent = `錯誤！你說的是: ${spokenWord}`;
                    resultElement.className = "incorrect";
                }
            };

            recognition.onerror = function() {
                alert("語音辨識發生錯誤，請重試");
            };
        }
    </script>

</body>
</html>
