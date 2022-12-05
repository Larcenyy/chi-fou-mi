let player;
let computer;

let getStart = document.getElementById("start");
let affiche = document.getElementById("text");
let myStock = document.getElementById("stocking");
let random; // Le bot choisi un chiffre

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
    console.log(computer)

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
                }
                else
                {
                    affiche.innerHTML = "❌ Vous avez perdu ! vous avez choisi : " + player.value + ", l'ordinateur à choisi : " + computer;
                    myStock.innerHTML += affiche.innerHTML + "<br>"
                }
                break;

            case 'feuille' :
                if(player.value === 'ciseaux')
                {
                    affiche.innerHTML = "✅Vous avez Gagné ! vous avez choisi : " + player.value + ", l'ordinateur à choisi : " + computer;
                    myStock.innerHTML += affiche.innerHTML + "<br>"
                }
                else {
                    affiche.innerHTML = "❌ Vous avez perdu ! vous avez choisi : " + player.value + ", l'ordinateur à choisi : " + computer;
                    myStock.innerHTML += affiche.innerHTML + "<br>"
                }
                break;

            case "ciseaux":
                if(player.value === "pierre")
                {
                    affiche.innerHTML = "✅Vous avez Gagné ! vous avez choisi : " + player.value + ", l'ordinateur à choisi : " + computer;
                    myStock.innerHTML += affiche.innerHTML + "<br>"
                }
                else{
                    affiche.innerHTML = "❌ Vous avez perdu ! vous avez choisi : " + player.value + ", l'ordinateur à choisi : " + computer;
                    myStock.innerHTML += affiche.innerHTML + "<br>"
                }
                break;
            default:

            affiche.innerHTML = "Choix de l'ordinateur : " + computer;
        }
    }
}