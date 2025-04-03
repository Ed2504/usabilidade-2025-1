# Aula 07 - 03/ABR

### Javascript para quem já sabe programar

referências: [W3Schols](https://www.w3schools.com/js/default.asp) [Mozilla](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)


# Funções anônimas

Funções também podem ser criadas por uma expressão de função sem indicar um identificador. Essa função é conhecida como uma **'função anônima'**. Neste caso, a função pode ser armazenada em uma variável ou ser passada como parâmetro para outra função.

~~~js
let raizQuadrada = function (numero) {
  return numero * numero;
};
let x = raizQuadrada(4); //x recebe o valor 16
~~~

Passando a função para outra função

~~~js
function raizCubica(f, numero) {
  return f(numero) * numero;
};
let x = raizCubica(raizQuadrada, 3); //x recebe o valor 27
~~~

# Arrow functions 

As **arrow functions** foram introduzidas no ES6 como uma maneira mais curta e simples de escrever funções. Elas eliminam a necessidade da palavra-chave ```function``` e têm uma sintaxe mais enxuta:

~~~js
const raizQuadrada = (numero) => numero * numero;
~~~

ou

~~~js
const fatorial = (num) => {
  let fat = 1
  for(let i=1; i<=num; i++) {
    fat = fat * i
  }
  return fat
}
~~~

# Funções Callback

As funções de **callback** em JavaScript são funções passadas como argumentos para outras funções. Elas são executadas após a conclusão de uma operação, permitindo um fluxo de trabalho assíncrono. Isso é crucial em operações que dependem de tempo, como solicitações de rede ou eventos de usuário.

## Fetch

https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch

> https://geek-jokes.sameerkumar.website/api?format=json

## SetInterval e SetTimeout

* SetInterval: chama uma função a cada período de tempo https://www.w3schools.com/jsref/met_win_setinterval.asp
* SetTimeout: chama uma função uma vez após um período de tempo https://www.w3schools.com/jsref/met_win_settimeout.asp



## Modularização (import/export)

Existem duas formas: 
* CJS (Common JavaScript) ou
* ESM (EcmaScript Modules)

Para esta aula vamos apenas mostrar o uso do **ESM (EcmaScript Modules)**

[referência Mozilla](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Modules) 

### Exportando recursos do módulo

Isso é feito usando a declaração ```export```

A maneira mais fácil de usá-lo é colocá-lo na frente de qualquer item que você queira exportar para fora do módulo, por exemplo:

~~~js
export const name = "john";

export function draw() {
    ...
}
~~~

Uma maneira mais conveniente de exportar todos os itens que você deseja exportar é usar uma única instrução de exportação no final do arquivo do módulo, seguida por uma lista separada por vírgula dos recursos que você deseja exportar envoltos em chaves. Por exemplo:

~~~js
export { name, draw }
~~~

### Importando recursos para o seu script

Depois de exportar alguns recursos do seu módulo, é necessário importá-los para o script para poder usá-los. A maneira mais simples de fazer isso é a seguinte:

~~~js
import { name, draw } from "./arquivo.js";
~~~

#### Jogo dos palitinhos

O jogo dos palitinhos de boteco, é uma brincadeira simples e democrática que pode ser jogada com poucos palitos e duas pessoas. 

#### Como jogar 

- Cada participante recebe três palitos
- Escolhem quantos palitos vão colocar na mão
- Deixam a mão fechada sobre a mesa
- O primeiro jogador dá um palpite da soma de todos os palitos
- Todos abrem a mão e os palitos são conferidos
- Quem acertar o palpite ou chegar mais próximo leva o brinde
