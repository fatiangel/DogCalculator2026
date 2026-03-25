document.addEventListener("DOMContentLoaded", function(){

const birthInput = document.getElementById("birthDate");

const calcBtn = document.getElementById("calcBtn");

const clearBtn = document.getElementById("clearBtn");

const resultDiv = document.getElementById("result");


/* 初始化檢查 localStorage */

const savedDate = localStorage.getItem("birthDatey");

if(savedDate){

birthInput.value = savedDate;

}



/* 計算年齡 */

calcBtn.addEventListener("click",function(){

const birthDate = birthInput.value;

if(!birthDate){

alert("請輸入出生日期");

return;

}


/* 存入 localStorage */

localStorage.setItem("birthDatey",birthDate);


const birth = new Date(birthDate);

const today = new Date();


const diffTime = today - birth;

const diffDays = diffTime/(1000*60*60*24);

const dogAge = diffDays/365;


/* 防止 log(0) */

if(dogAge<=0){

alert("日期錯誤");

return;

}


/* Cell Systems 公式 */

const humanAge = 16*Math.log(dogAge)+31;


resultDiv.innerHTML =

`<p>狗的年齡是：${dogAge.toFixed(2)} 歲</p>

<p>換算人類的年齡是：${humanAge.toFixed(2)} 歲</p>

<p class="note">

公式：human_age = 16 × ln(dog_age) + 31

</p>`;

});


/* 清除 */

clearBtn.addEventListener("click",function(){

birthInput.value="";

localStorage.removeItem("birthDatey");

resultDiv.innerHTML=

`<p>狗的年齡是：-</p>

<p>換算人類的年齡是：-</p>

<p class="note">

公式簡述：依據 Cell Systems (2020) DNA methylation aging clock

</p>`;

});


});
