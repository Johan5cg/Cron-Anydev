const cron = require('node-cron');
const readline = require('readline');

var rl = readline.createInterface(process.stdin, process.stdout);
var it = 1;

rl.question('Contador de n segundos \n\n¿Cada cuantos segundos quieres que se ejecute tu tarea? \n\n Escriba un numero: ', (respuesta) => { 
    if(respuesta === '1'){
      console.log('Has elegido cada segundo');
    }else {
      console.log('Has elegido cada ' + respuesta + ' segundos')
    }
    cron.schedule(`*/${respuesta} * * * * *`, () => {
    console.log('Hola mundo ' + it);
    it++
  });
});