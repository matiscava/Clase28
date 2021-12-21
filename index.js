// process.on('exit', (code) => {
//   console.log(`Exit in code: ${code}`);
// })
// process.on('beforeExit', (code) => {
//   console.log('Before exit process', code);
// })
// console.log(Date.now());

// process.on('uncaughtException', (err) => console.log(`Error: ${err}`))

// setTimeout( () => console.log('Running...'),500);

// asra();
// console.log('No se va a ejecutar');

// console.log(process.execPath);

// process.stdout.write(process.execPath + '\n')

/* CHILD PROCESS */

// const { exec } = require('child_process');

// exec( 'ls -lh', ( err , stdout , stderr ) => {
//   if( err ) {
//     console.error(`Sucedio un error: ${err}`);
//     return;
//   }
//   if(stderr){
//     console.error(`stderr: ${stderr}`);
//     return;
//   }

//   console.log(`stdout: ${stdout}`);
// })

const { fork } = require('child_process');

const forked = fork('child.js');

forked.on( 'message' , msg => {
  console.log(`Mensaje del hijo: ${JSON.stringify(msg)}`);
})

console.log('Comienzo del programa Padre');
setTimeout( () => {
  forked.send({mensaje: 'Hola!'})
},2000)