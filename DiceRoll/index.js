


function rolldice(){

    const numofdice=document.getElementById("numofdice");
    const diceresult=document.getElementById("diceresult");
    const diceimages=document.getElementById("diceimages");
    const values=[];
    const images=[];

    for (let i = 0; i < parseInt(numofdice.value, 10); i++) {

        const value=Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="dice_images/${value}.png">`);
    }
    diceresult.textContent=`Dice: ${values.join(', ')}`;
    diceimages.innerHTML=images.join('');
}