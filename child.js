let contador = 0;

process.on('message' , msg => {
  console.log(`Mensaje del padre: ${JSON.stringify(msg)}`);
  setInterval(() => {
    process.send({contador: contador++})
  }, 1000);
})