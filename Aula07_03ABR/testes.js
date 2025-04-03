/*
for(let i=0; i<10; i++) {
    console.log("Oi gente "+i);
}
*/

//let idade = 20.5
//console.log("idade"+idade);
//console.log("idade",idade);

//let fazAlgo = function(valor) {
//    console.log("você passou o valor ",valor);
//    console.log("Estou fazendo alguma coisa...");
//    return valor+1
//}
//
//console.log(fazAlgo);
//
//let outro = fazAlgo
//console.log(outro);
//
//let x = fazAlgo(5)
////let y = outro(8)
////
//console.log("x",x);
////console.log("y",y);

let contador  = 1

let id = setInterval(() => {
    contador++
    console.log(contador);
},50)
//console.log(id);

setTimeout(() => {
    clearInterval(id);
},4000)