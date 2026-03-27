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

const dogAge = diff / (1000 * 60 * 60 * 24 * 365);

/* 人類年齡公式 */

const humanAge = 16 * Math.log(dogAge) + 31;

/* 顯示結果 */

result.innerHTML =
"狗的年齡是 " + dogAge.toFixed(2) + " 歲 <br>" +
"換算人類的年齡是 " + humanAge.toFixed(2) + " 歲 <br><br>" +
"公式: HumanAge = 16 × ln(DogAge) + 31";

});

/* 清除 */

clearBtn.addEventListener("click", function () {

birthInput.value = "";
result.innerHTML = "";

localStorage.removeItem("birthDatey");

});

});