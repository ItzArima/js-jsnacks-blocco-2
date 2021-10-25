const bicidacorsa = [
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
    console.log(bicidacorsa[i].nome);
    if(bicidacorsa[i].peso<minore){
        minore = bicidacorsa[i].peso;
        identificatore = i;
    }
}

console.log("Peso minore : "+ minore + " della bicicletta : " + bicidacorsa[identificatore].nome);