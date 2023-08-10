function Calculo(){
    var final = 0
    if (document.getElementById("A").checked){
        final = "Opção para Falar com o atendente selecionada."
     }
     else if (document.getElementById("B").checked){
        final = "Opção para Falar com o RH selecionada."
     }
     else if(document.getElementById("C").checked){
        final = "Opção para Falar com o Gerente selecionada."
     }
     else if(document.getElementById("D").checked){
        final = "Opção para Sair selecionada."
     }
     else{
        final = "error! selecione uma opção"
        alert(final)
     }
    document.getElementById("final").innerHTML = final
}