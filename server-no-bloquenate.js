const http = require('http');
const { fork } = require('child_process')

// const calculo = () => {
//   let sum = 0;
//   for ( i=0;i<6e9;i++){
//     sum+=1
//   }
//   return sum;
// }

let visitas = 0;

const server = http.createServer();

server.on('request' , (req , res) => {
  let { url } = req;
  if( url == '/calculo-nobloq') {
    // const sum = calculo();
    const computo = fork('./computo.js')
    computo.send('start')
    computo.on('message', sum => {
        res.end(`La suma es ${sum}`)
      })
  }
  else if ( url == '/') {
    res.end(`Ok ${++visitas}`)
  }
})

const PORT = 8080;
server.listen( PORT , err => {
  if (err) throw new Error(`Error en servidor: ${err}`)
  console.log(`Servidor http escuchando en el puerto ${PORT}`);
})