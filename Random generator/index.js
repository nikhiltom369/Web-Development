const Myb=document.getElementById("Myb");
const mylabel=document.getElementById("mylabel");
const min=1;
const max=6;
let randomnum;
Myb.onclick=function(){
    randomnum=Math.random() * (max-min)+min;
    mylabel.textContent=randomnum;
}