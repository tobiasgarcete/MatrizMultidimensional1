function crearMatrices(){
    let numFilas = document.getElementById("filas").value;
    let numColumnas = document.getElementById("columnas").value;
    let contenedorMatrices = document.getElementById("matrices");
    contenedorMatrices.innerHTML = '';

    if (numFilas <= 0 || numColumnas <= 0){
        alert("Ingrese valores válidos para filas y columnas");
        return;
    }
    
    for (let i = 1; i <= 2; i++){
        let matrizElemento = document.createElement("div");
        matrizElemento.className = "matriz";
        matrizElemento.style.display = "grid";
        matrizElemento.style.gridTemplateColumns=`repeat(${numColumnas},auto)`;

        for (let f = 0; f < numFilas; f++){
            for(let c = 0; c < numColumnas; c++){
                let entrada = document.createElement('input');
                entrada.type='number';
                entrada.className=`matriz${i}`;
                matrizElemento.appendChild(entrada);
            }
        }
        contenedorMatrices.appendChild(matrizElemento);
    }
}

function calcularSumaMatrices(){
    let primeraMatriz = Array.from(document.querySelectorAll('.matriz1')).map(entrada => Number(entrada.value));
    let segundaMatriz = Array.from(document.querySelectorAll('.matriz2')).map(entrada => Number(entrada.value));

    if (primeraMatriz.some(isNaN) || segundaMatriz.some(isNaN)){
        alert("Ingrese solo valores numéricos");
        return;
    }

    if (primeraMatriz.length !== segundaMatriz.length){
        alert("Las matrices deben tener el mismo orden");
        return;
    }

    let contenedorResultado = document.getElementById('resultado');
    contenedorResultado.innerHTML = '';
    contenedorResultado.style.gridTemplateColumns = document.querySelector('.matriz').style.gridTemplateColumns;

    for(let i = 0; i < primeraMatriz.length; i++){
        let celda = document.createElement('div-matriz');
        celda.textContent = primeraMatriz[i] + segundaMatriz[i];
        contenedorResultado.appendChild(celda);
    }
}
