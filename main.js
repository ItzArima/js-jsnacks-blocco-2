/* const bicidacorsa = [
    {
        nome : 'bici1',
        peso : 9
    },
    {
        nome : 'bici2',
        peso : 7 
    },
    {
        nome : 'bici3',
        peso : 3
    },
    {
        nome : 'bici4',
        peso : 1
    }

]

console.log(bicidacorsa[0].peso);
var minore = bicidacorsa[0].peso;
var identificatore = 0;
for(let i=0;i<bicidacorsa.length;i++){
    if(bicidacorsa[i].peso<minore){
        minore = bicidacorsa[i].peso;
        identificatore = i;
    }
}

document.getElementById("stampa").innerHTML = "Peso minore : "+ minore + " della bicicletta : " + bicidacorsa[identificatore].nome */

const squadre = [
    {
        punti : 0,
        falli : 0,
        nome : ''
    },
    {
        punti : 0,
        falli : 0,
        nome : ''
    },
    {
        punti : 0,
        falli : 0,
        nome : ''
    },
    {
        punti : 0,
        falli : 0,
        nome : ''
    }
];


for(let i = 0;i<squadre.length;i++){
    var inserisci = prompt("inserire nome squadra");
    squadre[i].nome = inserisci;
    squadre[i].falli = Math.floor(Math.random() * 10);
    delete squadre[i].punti;
    console.log(squadre[i].nome+ " : punti " + squadre[i].punti + "; falli commessi : " + squadre[i].falli);

}
