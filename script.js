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

/* 開始計算 */
calcBtn.addEventListener("click", function () {

    const birthDate = birthInput.value;

    if (!birthDate) {
        alert("請輸入出生日期");
        return;
    }

    /* 儲存 localStorage */
    localStorage.setItem("birthDatey", birthDate);

    const birth = new Date(birthDate);
    const today = new Date();

    const diff = today - birth;

    const dogAge = diff / (1000 * 60 * 60 * 24 * 365);

    if (dogAge <= 0) {
        result.innerHTML = "出生日期錯誤";
        return;
    }

    const humanAge = 16 * Math.log(dogAge) + 31;

    result.innerHTML =
        "狗的年齡是 " + dogAge.toFixed(2) + " 歲<br>" +
        "換算人類的年齡是 " + humanAge.toFixed(2) + " 歲<br><br>" +
        "公式：HumanAge = 16 × ln(DogAge) + 31";
});

/* 清除 */
clearBtn.addEventListener("click", function () {

    birthInput.value = "";
    result.innerHTML = "";

    localStorage.removeItem("birthDatey");
});

});