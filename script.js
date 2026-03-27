window.onload = function(){

const birthInput = document.getElementById("birthDatey");
const result = document.getElementById("result");
const calcBtn = document.getElementById("calcBtn");
const clearBtn = document.getElementById("clearBtn");

/* 初始化時讀取 localStorage */
const savedDate = localStorage.getItem("birthDatey");

if(savedDate){
birthInput.value = savedDate;
}

/* 計算按鈕 */
calcBtn.addEventListener("click", function(){

const birthDate = birthInput.value;

if(!birthDate){
alert("請輸入出生日期");
return;
}

/* 儲存到 localStorage */
localStorage.setItem("birthDatey", birthDate);

const birth = new Date(birthDate);
const today = new Date();

/* 計算狗年齡 */
const diff = today - birth;
const ageYears = diff / (1000*60*60*24*365);

if(ageYears <= 0){
result.innerHTML = "出生日期錯誤";
return;
}

/* 人類年齡公式 */
const humanAge = 16 * Math.log(ageYears) + 31;

result.innerHTML =
`狗的年齡是 ${ageYears.toFixed(2)} 歲 <br>
換算人類的年齡是 ${humanAge.toFixed(2)} 歲 <br><br>
公式: Human Age = 16 × ln(Dog Age) + 31`;
});

/* 清除 */
clearBtn.addEventListener("click", function(){

birthInput.value="";
result.innerHTML="";

localStorage.removeItem("birthDatey");

});

}