let nameInput=document.querySelector("#nameInput");
let dateInput=document.querySelector("#dateInput");
let btnPrimary=document.querySelector("#btn-primary");
let outputText=document.querySelector("#outputText");

btnPrimary.addEventListener("click",eventHandler)

function eventHandler(){
    let name=nameInput.value 
    let date=dateInput.value

    if((date%4===0)&&(date%100!=0)||(date%400===0)){
        outputText.innerText=name+" you were born in a leap year !!"
    }else{
        outputText.innerText=name+" you were not born in a leap year!!!"
    }
}