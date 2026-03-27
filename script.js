document.addEventListener("DOMContentLoaded", function () {

const birthInput = document.getElementById("birthDatey");
const result = document.getElementById("result");
const calcBtn = document.getElementById("calcBtn");
const clearBtn = document.getElementById("clearBtn");
const todayString = new Date().toISOString().split("T")[0];

birthInput.max = todayString;

function showMessage(message, type) {
result.className = "result result-" + type;
result.innerHTML = message;
}

function resetMessage() {
result.className = "result";
result.innerHTML = "";
}

function calculateDogAge() {
const birthDate = birthInput.value;

if (!birthDate) {
showMessage("請先輸入妙麗的出生日期。", "error");
return;
}

if (birthDate > todayString) {
showMessage("出生日期不能選未來日期，請重新選擇。", "error");
return;
}

localStorage.setItem("birthDatey", birthDate);

const birth = new Date(birthDate);
const today = new Date();

/* 狗實際年齡 */
const diff = today - birth;
const dogAge = diff / (1000 * 60 * 60 * 24 * 365.25);

if (dogAge <= 0) {
showMessage("日期輸入有誤，請選擇今天以前的日期。", "error");
return;
}

/* 人類年齡公式 */
const humanAge = 16 * Math.log(dogAge) + 31;

showMessage(
"<strong>計算完成</strong><br>" +
"狗的年齡是 " + dogAge.toFixed(2) + " 歲 <br>" +
"換算人類的年齡是 " + humanAge.toFixed(2) + " 歲 <br><br>" +
"公式: HumanAge = 16 × ln(DogAge) + 31",
"success"
);
}

/* 初始化 localStorage */

const savedDate = localStorage.getItem("birthDatey");

if (savedDate) {
birthInput.value = savedDate;
showMessage("已載入上次儲存的出生日期，並自動完成計算。", "info");
calculateDogAge();
}

/* 計算年齡 */

calcBtn.addEventListener("click", calculateDogAge);

/* 清除按鈕功能 */
clearBtn.addEventListener("click", function () {
    // 1. 清除 localStorage 中的資料
    localStorage.removeItem("birthDatey");

    // 2. 將輸入框重設為空白 (或預設值)
    birthInput.value = "";
    birthInput.max = todayString;

    // 3. 清空結果顯示區域
    resetMessage();
    
    // 4. (選配) 可以加一個 console.log 方便 Debug
    console.log("資料已成功清除");
});

});
