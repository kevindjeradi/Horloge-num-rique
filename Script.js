function    afficherHeure()
{
    var date = new Date();
    var heures = date.getHours();
    var minutes = date.getMinutes();
    var secondes = date.getSeconds();
    var heureActuelle = 0;

    if (heures < 10)
        heures = "0" + heures;
    if (minutes < 10)
        minutes = "0" + minutes;
    if (secondes < 10)
        secondes = "0" + secondes;

    var heureActuelle = heures + ":" + minutes + ":" + secondes;

    document.getElementById("horloge").innerText = heureActuelle;
    document.getElementById("horloge").textContent = heureActuelle;
    
    setTimeout(afficherHeure, 1000);
}

afficherHeure();