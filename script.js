document.addEventListener("DOMContentLoaded", function () {

const birthInput = document.getElementById("birthDatey");
const result = document.getElementById("result");
const calcBtn = document.getElementById("calcBtn");
const clearBtn = document.getElementById("clearBtn");

/* 初始化 localStorage */

const savedDate = localStorage.getItem("birthDatey");

if (savedDate) {
birthInput.value = savedDate;
}

/* 計算年齡 */

calcBtn.addEventListener("click", function () {

const birthDate = birthInput.value;

if (!birthDate) {
alert("請輸入出生日期");
return;
}

/* 存入 localStorage */

localStorage.setItem("birthDatey", birthDate);

const birth = new Date(birthDate);
const today = new Date();

/* 狗實際年齡 */
const diff = today - birth;
const dogAge = diff / (1000 * 60 * 60 * 24 * 365.25); // 使用 365.25 考慮閏年更精確
/* ⚡ 關鍵檢查：如果狗狗還不到 1 歲或日期不正確 */
if (dogAge <= 0) {
    result.innerHTML = "日期輸入有誤，請選擇過去的日期！";
    return;
}

/* 人類年齡公式 */
// 注意：當 dogAge 很小時，log 可能會產出負值，通常此公式適用於 1 歲以上的狗狗
const humanAge = 16 * Math.log(dogAge) + 31;

/* 顯示結果 */
result.innerHTML =
"狗的年齡是 " + dogAge.toFixed(2) + " 歲 <br>" +
"換算人類的年齡是 " + humanAge.toFixed(2) + " 歲 <br><br>" +
"公式: HumanAge = 16 × ln(DogAge) + 31";

});

/* 清除按鈕功能 */
clearBtn.addEventListener("click", function () {
    // 1. 清除 localStorage 中的資料
    localStorage.removeItem("birthDatey");

    // 2. 將輸入框重設為空白 (或預設值)
    birthInput.value = "";

    // 3. 清空結果顯示區域
    result.innerHTML = "";
    
    // 4. (選配) 可以加一個 console.log 方便 Debug
    console.log("資料已成功清除");
});

});