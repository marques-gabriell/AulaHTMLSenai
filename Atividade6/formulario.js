function imprimirNome() {
    window.alert("Profissional cadastrado")
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let cargo = document.getElementById("cargo").value;
    let departamento = document.getElementById("departamento").value;
    let acesso = document.getElementById("acesso").checked;


    console.log("=====CRACHÁ VIRTUAL=====")
    console.log("Nome: ", nome);
    console.log("Idade: ", idade);
    console.log("Cargo: ", cargo);
    console.log("Departamento: ", departamento);
    console.log("Tem acesso restrito? ", acesso);



    alert(
        "Crachá Virtual!\n\n" + 
        "Nome: "+ nome + "\n" +
        "Idade: " + idade + "\n" +
        "Cargo: " + cargo + "\n" +
        "Departamento: " + departamento + "\n" +
        "Acesso Restrito: " + acesso
    );

    if (acesso){ /// se (verdadeiro)
        window.location.href = "pages/gerente.html"
    } else {
        window.location.href = "pages/funcionario.html"
    }
}