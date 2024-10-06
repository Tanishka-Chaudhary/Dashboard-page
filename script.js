const freq=document.querySelector("#frequency");
let result=document.getElementById("res");
// let frequ=prompt("enter");
console.log(frequ);

const freqcheck=(frequ,freq)=>{
    freq.innerText=frequ;
    if(frequ<=200){
        result.innerText="Relax! It's just a normal sneeze";
        result.style.backgroundColor="rgb(94, 133, 38)";
    }
    else{
        res.innerText="you need to consult to doctor";
        res.style.backgroundColor="red";
    }
}
