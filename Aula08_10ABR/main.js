
console.log("oi gente");

document.getElementById("btn1").addEventListener("click", () => {
    console.log("Alguem clicou no botão");
    let valorSepara = parseInt(document.getElementById("cxaSepara").value)
    console.log("valorSepara",valorSepara)
    let valorPalpite = document.getElementById("cxaPalpite").value
    valorPalpite = parseInt(valorPalpite)
    console.log("valorPalpite",valorPalpite)    
    document.getElementById("msg").innerText = "Você digitou: "+valorPalpite+" "+valorSepara
})

//document.getElementById("btn1").addEventListener("mousemove",() => {
//    // fazer algo
//})
