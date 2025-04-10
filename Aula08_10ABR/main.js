
console.log("oi gente");

let qtdePalitosJog = 3
let qtdePalitosComp = 3

document.getElementById("btn1").addEventListener("click", () => {
    console.log("Alguem clicou no botão");
    let valorSepara = parseInt(document.getElementById("cxaSepara").value)
    console.log("valorSepara",valorSepara)
    let valorPalpite = document.getElementById("cxaPalpite").value
    valorPalpite = parseInt(valorPalpite)
    console.log("valorPalpite",valorPalpite)    

    let valorSeparaComp =  parseInt(Math.random() * 10) % (qtdePalitosComp+1)
    console.log("valorSeparaComp",valorSeparaComp);
    document.getElementById("separaC").innerText = valorSeparaComp

    let valorPalpiteComp = valorSeparaComp + parseInt(Math.random() * 10) % (qtdePalitosJog+1)
    console.log("valorPalpiteComp",valorPalpiteComp);
    document.getElementById("palpiteC").innerText = valorPalpiteComp

    let mensagem = ""
    if(valorPalpite == valorSepara + valorSeparaComp) {
        mensagem = "Você ACERTOU!!!!!"
        qtdePalitosJog--;
    } else {
        if(valorPalpiteComp == valorSepara + valorSeparaComp) {
            mensagem = "Computador ACERTOU!!!!!"
            qtdePalitosComp--;    
        } else {
            mensagem = "NINGUÉM ACERTOU!!!!!"
        }
    }
    document.getElementById("msg").innerText = mensagem
    document.getElementById("qtdePC").innerHTML = qtdePalitosComp
    document.getElementById("qtdePJ").innerHTML = qtdePalitosJog

})

//document.getElementById("btn1").addEventListener("mousemove",() => {
//    // fazer algo
//})
