const bicidacorsa = [
    {
        nome : 'bici1',
        peso : 0.9
    },
    {
        nome : 'bici2',
        peso : 7.0 
    },
    {
        nome : 'bici3',
        peso : 3.0
    }
]

console.log(bicidacorsa[0].peso);
var minore = bicidacorsa[0].peso;
var identificatore = 0;
for(let i=0;i<bicidacorsa.length;i++){
    if(bicidacorsa[i]<minore){
        minore = bicidacorsa[i].peso;
        identificatore = i;
    }
}

console.log("Peso minore : "+ minore + " della bicicletta : " + bicidacorsa[identificatore].nome);