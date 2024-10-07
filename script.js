
const freq=document.querySelector("#frequency");
const res=document.querySelector("#res");
let f = prompt("Enter freq");

if(f<=200){
    freq.innerText=f;
    res.innerText="Relax! It's normal..";
    res.style.backgroundColor="green";
}
else{
    freq.innerText=f;
    res.innerText="You need to consult to doctor";
    res.style.backgroundColor="red";
}