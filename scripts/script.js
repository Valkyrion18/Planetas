let nombrePlanetas = Array ('Tierra', 'Marte', 'Jupiter');
let distancia = [6, 3, '67'];
let tamano = [];

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

//CICLO FOR EACH
nombrePlanetas.forEach((value, index, array) =>{
    console.log('planeta', index, value)
});

//FUNCION MAP
nombrePlanetas.map((planetas, index) => {
    return(
        console.log(`El planeta ${planetas} tiene tamaño de :${tamano[index]}`)       
        )
})

//FUNCION MAP CON RETORNO
let resultadoMap = nombrePlanetas.map((planetas, index) => {
    return(`El planeta ${planetas} tiene tamaño de :${tamano[index]}`)       
        
})

console.log(resultadoMap);