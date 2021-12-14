let nombrePlanetas = Array ('Tierra', 'Marte');
let distancia = [6, 3, '67'];
let tamaño = [];

/*console.log(nombrePlanetas)
console.log(distancia)
console.log(tamaño)*/

//CICLO WHILE
let i = 0;
while (i <= nombrePlanetas.length -1){
    console.log(i)
    console.log(nombrePlanetas[i]);
    i = i + 1;
}

//CICLO FOR
for (index = 0; index < nombrePlanetas.length; index++){
    console.log(nombrePlanetas[index]);
}

//CICLO FOR IN
for (const key in nombrePlanetas){
    console.log(nombrePlanetas[key]);
}

//CICLO FOR OF
for (const planeta of nombrePlanetas){
    console.log(planeta);
}

//OPERADOR DE IGUALDAD
for (const key in distancia){
    if (distancia[key] === '6'){
        console.log('Se encontró la distancia')
    }
    else{
        console.log('No se encontró la distancia')
    }
}