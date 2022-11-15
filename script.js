let divisao = parseInt(prompt('Digite aqui um numero'));

if(divisao % 3 == 0 && divisao % 5 == 0) {
    alert('O valor é invalido')

}else if (divisao % 3 == 0) {
    alert('Valor divisível por 3')

}else if (divisao % 5 == 0 ){
    alert('Valor divisível por 5') 

}else if (divisao % 2 == 0){
    alert(`O valor é par`)

 }else {
    alert ('O valor é impar')
 }
