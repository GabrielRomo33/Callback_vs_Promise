//Callback
//funcion que recibe como parametros 2 variables que seran numericas y se sumaran
//como tercer parametro recibe una Funcion en este caso es nombreada callback
const doAysncStuff = (numero1,numero2, callback) => {
    const resultado = numero1 * numero2;
    return setTimeout(() => {//set time out para retrasar la respuesta de la funcion 
        callback(resultado);//s eretorna la funcion con el resultado
    },500);
}
//las promesas siempretienen como parametro un resolve (para cuando se cumple)
//y un reject para cuando falla en algunos casos basta solo con tener el resolve
const doAysncStuffWhitPromises = (numero1, numero2) => {
    const resultado = numero1 + numero2 ;
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(resultado);
        }, 500);
    })
}

//Calback de la funcion 145
doAysncStuff(1,3, (result) => {
    console.log(result);
});
//se llama a la funcion con los parametros, se agrega el metodo then que es lo que se ejecuta al 
//cumplirse la promesa
doAysncStuffWhitPromises(1,3)
    .then(result => console.log(result));

// en cuanto a codificacion callback es mas corto pero las promesas son mas eficientes a la hora de ejecutar el codigo 
