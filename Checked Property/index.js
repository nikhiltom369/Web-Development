const mycheckbox=document.getElementById("mycheckbox");
const visabtn=document.getElementById("visabtn");
const mastercard=document.getElementById("mastercard");
const paypal=document.getElementById("paypal");
const mysubmit=document.getElementById("mysubmit");
const subrslt=document.getElementById("subrslt");
const payrslt=document.getElementById("payrslt");

mysubmit.onclick=function(){
    if(mycheckbox.checked){
        subrslt.textContent=`You are subscribed`;
    }
    else{
        subrslt.textContent=`You are NOT subscribed`;
    }

    if(visabtn.checked){
        payrslt.textContent=`You are paying with VISA card`;
    }
    else if(mastercard.checked){
        payrslt.textContent=`You are paying with MasterCard`;
    }
    else if(paypal.checked){
        payrslt.textContent=`You are paying with PayPal Card`;
    }
    else{
        payrslt.textContent=`You must select any payment method`;
    }
}