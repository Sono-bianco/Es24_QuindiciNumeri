window.addEventListener("load", function(){
    creaMat();
    caricaMat();
});

function caricaMat(){
    for(let cont = 1; cont <= 15; cont++)
    {
        let divRnd;
        do{
            const i = Math.floor(Math.random()*4);
            const j = Math.floor(Math.random()*4);
            divRnd = document.getElementById(`div-${i}-${j}`);
        }while(divRnd.textContent != "");

        divRnd.style.backgroundColor = "blue";
        divRnd.textContent = cont;
    }
}

function creaMat(){
    const wrapper = document.getElementById("wrapper");
    for(let i = 0; i < 4; i++){
        for(let j = 0; j < 4; j++)
        {
            const div = document.createElement("div");
            div.addEventListener("click", divClick);
            div.id = `div-${i}-${j}`;
            wrapper.appendChild(div);
        }
    }
}

function divClick(){
    const i = parseInt(this.id.split('-')[1]);
    const j = parseInt(this.id.split('-')[2]);

    if(j - 1 >= 0)
    {
        const sopra = document.getElementById(`div-${i}-${j-1}`);
        if(sopra.textContent == "")
        {
            scambio(this, sopra);
            return;
        }
    }

    if(i - 1 >= 0)
    {
        const sx = document.getElementById(`div-${i-1}-${j}`);
        if(sx.textContent == "")
        {
            scambio(this, sx);
            return;
        }
    }
    
    if(j + 1 < 4)
    {
        const sotto = document.getElementById(`div-${i}-${j+1}`);
        if(sotto.textContent == "")
        {
            scambio(this, sotto);
            return;
        }
    }
    if(i + 1 < 4)
    {
        const dx = document.getElementById(`div-${i+1}-${j}`);
        if(dx.textContent == "")
        {
            scambio(this, dx);
            return;
        }
    }
}

function scambio(piena, vuota){
    vuota.textContent = piena.textContent;
    vuota.style.backgroundColor = "blue";

    piena.textContent = "";
    piena.style.backgroundColor = null;
}