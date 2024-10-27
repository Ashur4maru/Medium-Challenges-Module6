// maak een array met enkele prijzen

let prijzen = [15, 10, 89, 36];

//schrijf een functie om 15% korting te geven

function geefKorting(prijs){
    let korting = (prijs / 100) * 15;
    return prijs - korting;
}

//pas de geefKorting functie aan alle elementen van prijzen

let prijzenMetKorting = prijzen.map(geefKorting);

console.log('Prijs zonder korting: ' + prijzen);
console.log('Prijs met korting: ' + prijzenMetKorting);
