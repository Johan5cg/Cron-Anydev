const cron = require('node-cron');
const readline = require('readline');

var rl = readline.createInterface(process.stdin, process.stdout);
var it = 1;

var botellas = 1250;
  console.log('\n\n NUMEROS DE BOTELLAS ACTUALES: ' + botellas);

rl.question('\n\n ¿Cantidad de botellas que se realizan en un segundo? \n\n Escriba un numero: ', (respuesta) => { 
    if(respuesta === '1'){
      console.log('Se realiza una botella por segundo');
    }else {
      console.log('Se realizan ' + respuesta + ' botellas por segundo')
    }
    cron.schedule(`*/1 * * * * *`, () => {
      var suma = parseInt(botellas) + parseInt(respuesta)*parseInt(it);
      console.log('Numero actual de botellas: ' + suma);
      it++ 
  });
}); 
const tarea = cron.schedule(`*/30 * * * * *`, () => {
  console.log('\n\n¿¿ SIGUES AHI ??? ');
});
setTimeout(() => {
  tarea.stop();
  console.log('\n\n Ok ME VOY');
}, 50000);