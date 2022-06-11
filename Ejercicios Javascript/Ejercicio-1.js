let distancia = prompt("Decime cuantos metros son");

if (distancia <= 1000){
    alert("viaja a pie");
}

else if (distancia > 1000 && distancia <= 10000){
    alert("viaja en bicicleta");
}

else if (distancia > 10000 && distancia <= 30000){
    alert("viaja en colectivo");
}

else if (distancia > 30000 && distancia <= 100000){
    alert("viaja en auto");
}

else if (distancia > 100000){
    alert("viaja en avión");
}
