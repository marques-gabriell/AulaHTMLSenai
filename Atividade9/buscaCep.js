function buscarCep(){
    let cepDigitado = document.getElementById("cep").value;

    cepDigitado = cepDigitado.replace("-", "");

    if (cepDigitado.length !==8 || isNaN(cepDigitado)) {
        alert("CEP inválido! Digite um CEP com 8 números.");
        return;
    }

    if (cepDigitado === "") 
        return;

    fetch(`https://viacep.com.br/ws/${cepDigitado}/json/`)
        .then(function(resposta){
            return resposta.json();
        })
        .then(function(dados){
            if(dados.erro){
                alert("CEP não encontrado")
                return;
            }
            document.getElementById("rua").value = dados.logradouro;
            document.getElementById("bairro").value = dados.bairro;
            document.getElementById("cidade").value = dados.localidade;
            document.getElementById("uf").value = dados.uf;
        })
        .catch(function() {
            alert("Erro ao consultar o CEP.");
        })
}
const campoCep = document.getElementById("cep");
campoCep.addEventListener('focusout', buscarCep);