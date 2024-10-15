// Функция для переключения между разделами приложения
function showSection(sectionId) {
    // Скрываем все разделы
    let sections = document.querySelectorAll('.section');
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }
    // Показываем выбранный раздел
    document.getElementById(sectionId).style.display = 'block';
}

// Шифр Цезаря
let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';

//для шифрования 
function encryptText(text, shift) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i].toLowerCase();
        let index = alphabet.indexOf(char);
        if (index !== -1) {
            let newIndex = (index + shift) % 33;
            result += alphabet[newIndex];
        } else {
            result += char;
        }
    }
    return result;
}

//для расшифровки
function decryptText(text, shift) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i].toLowerCase();
        let index = alphabet.indexOf(char);
        if (index !== -1) {
            let newIndex = (index - shift + 33) % 33;
            result += alphabet[newIndex];
        } else {
            result += char;
        }
    }
    return result;
}

// Зашифровать
function encrypt() {
    let message = document.getElementById('message').value;
    let shift = parseInt(document.getElementById('shift').value);
    let result = encryptText(message, shift);
    document.getElementById('result').textContent = 'Зашифрованное сообщение: ' + result;
}

// Расшифровать
function decrypt() {
    let message = document.getElementById('message').value;
    let shift = parseInt(document.getElementById('shift').value);
    let result = decryptText(message, shift);
    document.getElementById('result').textContent = 'Расшифрованное сообщение: ' + result;
}

// Игра - угадай число
let secretNumber;
let attempts;

// // Функция для начала новой игры
// function startNewGame() {
//     secretNumber = Math.floor(Math.random() * 10);
//     attempts = 0;
//     document.getElementById('gameResult').textContent = '';
//     document.getElementById('gameResult').style.color = 'black';
//     document.getElementById('newGameBtn').style.display = 'none';
//     document.getElementById('guess').value = '';
// }

// // Обработчик кнопки 
// function makeGuess() {
//     let guess = parseInt(document.getElementById('guess').value);
//     attempts++;

//     if (guess === secretNumber) {
//         document.getElementById('gameResult').textContent = 'Да! Компьютер загадал число ' + secretNumber + '!';
//         document.getElementById('gameResult').style.color = 'green';
//         document.getElementById('newGameBtn').style.display = 'inline-block';
//     } else if (attempts === 3) {
//         document.getElementById('gameResult').textContent = 'Увы, вы не угадали загаданное число. Это было число ' + secretNumber + '!';
//         document.getElementById('gameResult').style.color = 'red';
//         document.getElementById('newGameBtn').style.display = 'inline-block';
//     } else {
//         document.getElementById('gameResult').textContent = 'Нет, это не число ' + guess + '! Попытка № ' + attempts + ':';
//         document.getElementById('gameResult').style.color = 'black';
//     }
// }

// startNewGame();

// Секундомер
let startTime;
let intervalId;
let targetTime;

function addLeadingZero(number) {
    return number < 10 ? '0' + number : number;
}

// Функция для форматирования времени
function formatTime(milliseconds) {
    let hours = Math.floor(milliseconds / 3600000);
    let minutes = Math.floor((milliseconds % 3600000) / 60000);
    let seconds = Math.floor((milliseconds % 60000) / 1000);
    let ms = milliseconds % 1000;

    return addLeadingZero(hours) + ':' +
           addLeadingZero(minutes) + ':' +
           addLeadingZero(seconds) + '.' +
           ms.toString().padStart(3, '0');
}

// Функция обновления дисплея секундомера
function updateStopwatch() {
    let currentTime = Date.now();
    let elapsedTime = currentTime - startTime;
    
    document.getElementById('stopwatchDisplay').textContent = formatTime(elapsedTime);

    if (targetTime && elapsedTime >= targetTime) {
        stopStopwatch();
        document.getElementById('stopwatchDisplay').style.color = 'red';
    }
}

// Обработчик кнопки "Старт"
function startStopwatch() {
    if (!startTime) {
        let targetSeconds = parseInt(document.getElementById('targetSeconds').value) || 0;
        targetTime = targetSeconds * 1000;
        startTime = Date.now();
        intervalId = setInterval(updateStopwatch, 10);
    }
}

// Обработчик кнопки "Стоп"
function stopStopwatch() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
}

// Обработчик кнопки "Сброс"
function resetStopwatch() {
    stopStopwatch();
    startTime = null;
    document.getElementById('stopwatchDisplay').textContent = '00:00:00.000';
    document.getElementById('stopwatchDisplay').style.color = 'black';
}

module.exports = {
    addLeadingZero, 
    formatTime, 
    startStopwatch, 
    stopStopwatch, 
    resetStopwatch
  };