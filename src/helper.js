//Esta función obtiene la diferencia de años
export function obtenerDiferenciaYear(year) {
    return new Date().getFullYear() - year;
}

//Función que calcula el total a pagar según marca
export function calcularMarca(marca) {
    let incremento;

    switch(marca) {
        case 'europeo':
            incremento = 1.30;
            break;
        case 'americano':
            incremento = 1.15;
            break;
        case 'asiatico':
            incremento = 1.05;
            break

        default:
            break;
    }

    return incremento;
}

// Calcula el tipo de seguro
export function obtenerPlan(plan) {
    return (plan === 'basico') ? 1.20 : 1.50;
}

//Helper para colocar los nombres de los datos en mayúscula
export function primerMayuscula (texto){
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}