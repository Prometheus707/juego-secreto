
let numeroSec= 0;
let numeroIntentos= 0;
let numeroMaximo = 10;
let listaNumsSorteo = [];

function AsignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento)
    elementoHTML.textContent = texto
}

function verificar(){


    
    numeroUsuario = parseInt(document.getElementById('numeroUsuario').value);
    console.log(numeroIntentos)
    if (numeroUsuario == numeroSec){
        AsignarTextoElemento('p',`numero de intentos fue ${numeroIntentos} ${(numeroIntentos == 1) ? 'vez' : 'veces' }`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    }
    else{
        alert("no acertaste")
        numeroIntentos ++
        borrar();
    }
}

function borrar(){
    document.querySelector('#numeroUsuario').value = ''
}

function generarNumSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1


    console.log(numeroGenerado);
    console.log(listaNumsSorteo);

    //si ya sortearon todos los numeros
    if (listaNumsSorteo.length == numeroMaximo){
        alert('ya se sortearon todos los numeros')
    }else{

        if(listaNumsSorteo.includes(numeroGenerado)){
            return generarNumSecreto();//VUELVE A INGRESAR A LA MISMA FUNCION
        }else{
            listaNumsSorteo.push(numeroGenerado)
            return numeroGenerado
        }
    }

}


function CondicionesIniales(){
    AsignarTextoElemento('h1', 'Elije un numero');
    AsignarTextoElemento('p', 'indica un numero del 1 al 10');
    numeroSec = generarNumSecreto();
    numeroIntentos = 1;
}

function reiniciar(){

    //limpiar caja
    borrar();
    CondicionesIniales();
    //generar numero aleatorio
    
    //inicializar numero intentos

    //dehabilitar boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true')
    //cargar pagina

}

CondicionesIniales();






