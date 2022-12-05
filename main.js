let player;
let computer;

let getStart = document.getElementById("start");
let affiche = document.getElementById("text");
let myStock = document.getElementById("stocking");
let random; // Le bot choisi un chiffre

let scorePlayer = document.getElementById("scorePlayer")
let scoreOrdi = document.getElementById("scoreOrdi")

scoreOrdi.style.color = "red"
scorePlayer.style.color = "blue"

let counterPlayer = 0;
let counterOrdi  = 0;





getStart.addEventListener("click", function (){
    start()
})

function start() {
    random = Math.random(); // Le bot choisi un chiffre

    if(random < 1 / 3)
    {
        computer = 'pierre';
    }
    else if(random < 2 / 3)
    {
        computer = 'feuille';
    }
    else
    {
        computer = 'ciseaux';
    }

    getStart.value = "Recommencer"
    player = document.getElementById("infos");
    player.value = player.value.toLowerCase();

    if(player.value === computer)
    {
        affiche.innerHTML = "⚠️ Il y a égalité.., vous avez choisi : " + player.value + ", l'ordinateur à choisi : " + computer
        myStock.innerHTML += affiche.innerHTML + "<br>"
    }
    else{
        switch(computer){
            case 'pierre' :
                if(player.value === "feuille")
                {
                    affiche.innerHTML = "✅ Vous avez Gagné ! vous avez choisi : " + player.value + ", l'ordinateur à choisi : " + computer;
                    myStock.innerHTML += affiche.innerHTML + "<br>"

                    counterPlayer+=1;
                }
                else
                {
                    affiche.innerHTML = "❌ Vous avez perdu ! vous avez choisi : " + player.value + ", l'ordinateur à choisi : " + computer;
                    myStock.innerHTML += affiche.innerHTML + "<br>"

                    counterOrdi+=1;
                    return counterOrdi
                }
                break;

            case 'feuille' :
                if(player.value === 'ciseaux')
                {
                    affiche.innerHTML = "✅Vous avez Gagné ! vous avez choisi : " + player.value + ", l'ordinateur à choisi : " + computer;
                    myStock.innerHTML += affiche.innerHTML + "<br>"

                    counterPlayer+=1;
                    console.log(counterPlayer)
                }
                else {
                    affiche.innerHTML = "❌ Vous avez perdu ! vous avez choisi : " + player.value + ", l'ordinateur à choisi : " + computer;
                    myStock.innerHTML += affiche.innerHTML + "<br>"

                    counterOrdi+=1;
                    console.log(counterOrdi)
                }
                break;

            case "ciseaux":
                if(player.value === "pierre")
                {
                    affiche.innerHTML = "✅Vous avez Gagné ! vous avez choisi : " + player.value + ", l'ordinateur à choisi : " + computer;
                    myStock.innerHTML += affiche.innerHTML + "<br>"

                    counterPlayer+=1;
                    console.log(counterPlayer)
                }
                else{
                    affiche.innerHTML = "❌ Vous avez perdu ! vous avez choisi : " + player.value + ", l'ordinateur à choisi : " + computer;
                    myStock.innerHTML += affiche.innerHTML + "<br>"

                    counterOrdi+=1;
                    console.log(counterOrdi)
                }
                break;
            default: affiche.innerHTML = "Choix de l'ordinateur : " + computer;
        }

        scorePlayer.innerHTML = counterPlayer;
        scoreOrdi.innerHTML = counterOrdi;

        if (counterOrdi === 10){
            alert("L'ordinateur à était trop fort..");
            counterOrdi = 0
            counterPlayer = 0
        }
        else if(counterPlayer === 10){
            alert("Vous avez était trop fort..");
            counterOrdi = 0
            counterPlayer = 0
        }
    }
}

