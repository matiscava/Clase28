let parametros = {}

const numeros = [];
const numerosErr = [];
const tiposErr = [];
let error = false;
let promedio = 0;

if(process.argv.length>=2){
  let err = {
    descripcion: 'entrada vacia'
  }
  parametros={err};
}else{
  for(i=2 ; i< process.argv.length ; i++) {
    let numero = parseInt(process.argv[i]);
    if(!isNaN(numero)){
      numeros.push(numero)
    }else{
      error=true;
    }
  }
  for (const num of numeros) {
    promedio += num
  }
  promedio = promedio/numeros.length
  
  const max = Math.max(...numeros);
  const min = Math.min(...numeros);
  
  
  if(error){
    for(i=2 ; i< process.argv.length ; i++) {
      let numero = parseInt(process.argv[i]);
      if(!isNaN(numero)){
        numerosErr.push(numero)
        tiposErr.push(typeof numero)
      }else if (process.argv[i] === 'true' || process.argv[i] === 'false'){
        numerosErr.push(process.argv[i])
        tiposErr.push('boolean')
      }else{
        numerosErr.push(process.argv[i])
        tiposErr.push(typeof process.argv[i])
      }
    }
    let err = {
      descripcion: 'error de tipo',
      numeros: numerosErr,
      tipos: tiposErr
    }
    parametros = {err};
  
  }else{
    let datos= {
      numeros: numeros,
      promedio: promedio,
      max:max,
      min: min,
      ejecutable: process.execPath,
      pid: process.pid
    }
    parametros = {datos};
  }
}

console.log(parametros);
// process.stdout.write(parametros + '\n')
// datos= {datos,...numeros}


// parametros= {datos}
// console.log({datos}ñ);