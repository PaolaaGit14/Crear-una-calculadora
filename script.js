// VARIABLES PRINCIPALES DE LA CALCULADORA

// Guarda el número que se está introduciendo
let numeroActual = "0";

// Guarda el primer número de la operación
let numeroAnterior = "";

// Guarda la operación matemática seleccionada
let operacion = "";

// Conecta JavaScript con la pantalla del HTML
const pantalla = document.getElementById("pantalla");


// FUNCIÓN PARA AGREGAR NÚMEROS

function agregarNumero(numero) {

    // Si la pantalla tiene cero o está vacía,
    // reemplaza su contenido por el número seleccionado
    if (numeroActual === "0" || numeroActual === "") {
        numeroActual = numero;
    } else {

        // Si ya existe un número, agrega el siguiente
        numeroActual += numero;
    }

    // Actualiza la pantalla de la calculadora
    pantalla.textContent = numeroActual;
}


// FUNCIÓN PARA SELECCIONAR UNA OPERACIÓN

function seleccionarOperacion(simbolo) {

    // Si todavía no se ha introducido un número, no continúa
    if (numeroActual === "") {
        return;
    }

    // Guarda el primer número
    numeroAnterior = numeroActual;

    // Guarda la operación seleccionada
    operacion = simbolo;

    // Prepara la pantalla para recibir el segundo número
    numeroActual = "";
}


// FUNCIÓN PARA REALIZAR LAS OPERACIONES

function calcular() {

    // Verifica que existan los dos números y una operación
    if (numeroAnterior === "" || numeroActual === "" || operacion === "") {
        return;
    }

    // Convierte los valores guardados en números
    let primerNumero = parseFloat(numeroAnterior);
    let segundoNumero = parseFloat(numeroActual);

    // Variable donde se guardará el resultado
    let resultado;

    // Identifica qué operación matemática se realizará
    switch (operacion) {

        case "+":
            resultado = primerNumero + segundoNumero;
            break;

        case "-":
            resultado = primerNumero - segundoNumero;
            break;

        case "*":
            resultado = primerNumero * segundoNumero;
            break;

        case "/":

            // Evita realizar una división entre cero
            if (segundoNumero === 0) {
                pantalla.textContent = "Error";

                numeroActual = "0";
                numeroAnterior = "";
                operacion = "";

                return;
            }

            resultado = primerNumero / segundoNumero;
            break;

        default:
            return;
    }

    // Redondea el resultado para evitar mostrar demasiados decimales
    resultado = Number(resultado.toPrecision(10));

    // Muestra el resultado en la pantalla
    pantalla.textContent = resultado;

    // Guarda el resultado para permitir continuar operando
    numeroActual = resultado.toString();

    // Reinicia los datos de la operación anterior
    numeroAnterior = "";
    operacion = "";
}


// FUNCIÓN PARA LIMPIAR LA CALCULADORA

function limpiar() {

    // Restablece las variables a sus valores iniciales
    numeroActual = "0";
    numeroAnterior = "";
    operacion = "";

    // Limpia la pantalla
    pantalla.textContent = "0";
}