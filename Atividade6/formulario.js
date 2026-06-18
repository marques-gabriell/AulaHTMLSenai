function imprimirNome() {
    window.alert("Usuário cadastrado")
    let nome = document.getElementById("nome").value;

    console.log("Seu nome é: "+ nome)

    alert("Aluno cadastrado!\n\nNome do aluno: "+ nome)


    
    let idade = document.getElementById("idade").value;

    console.log("Sua idade é: "+ idade)

    alert("Idade do funcionário: "+ idade)


    let cargo = document.getElementById("cargo").value;

    console.log("Seu cargo: "+ cargo)

    alert("Cargo do funcionário: "+ cargo)


    let departamento = document.getElementById("departamento").value;

    console.log("Seu departamento é: "+ departamento)

    alert("Departamento funcionário: "+ departamento)


    let acesso = document.getElementById("acesso").value;

    console.log("Tem acesso Restrito: "+ acesso)

    alert("Tem acesso restrito: "+ acesso)
    }