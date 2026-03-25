const birthInput = document.getElementById("birthDate");
const resultDiv = document.getElementById("result");

const calcBtn = document.getElementById("calcBtn");
const clearBtn = document.getElementById("clearBtn");

/* 初始化檢查 localStorage */
window.onload = function(){

    const savedDate = localStorage.getItem("birthDatey");

    if(savedDate){
        birthInput.value = savedDate;
    }

}

/* 計算年齡 */
calcBtn.addEventListener("click",function(){

    const birthDate = birthInput.value;

    if(!birthDate){
        alert("請輸入出生日期");
        return;
    }

    /* 存入 localStorage */
    localStorage.setItem("birthDatey", birthDate);

    const birth = new Date(birthDate);
    const today = new Date();

    const diffTime = today - birth;
    const diffDays = diffTime / (1000 * 60 * 60 * 24);

    const dogAge = diffDays / 365;

    /* Cell Systems 公式 */
    const humanAge = 16 * Math.log(dogAge) + 31;

    resultDiv.innerHTML = `
        <p>狗的年齡是：${dogAge.toFixed(2)} 歲</p>
        <p>換算人類的年齡是：${humanAge.toFixed(2)} 歲</p>
        <p>公式簡述：human_age = 16 × ln(dog_age) + 31 (Cell Systems, 2020)</p>
    `;

});


/* 清除 */
clearBtn.addEventListener("click",function(){

    birthInput.value = "";

    localStorage.removeItem("birthDatey");

    resultDiv.innerHTML = `
        <p>狗的年齡是：-</p>
        <p>換算人類的年齡是：-</p>
        <p>公式簡述：使用 Cell Systems (2020) DNA methylation 年齡模型。</p>
    `;

});
