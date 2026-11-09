const formulario = document.querySelector("#formCadastro");

formulario.addEventListener("submit", function(event){
    event.preventDefault();

    const nome = document.querySelector("#nome").value;
    const destino = document.querySelector("#destino").value;

    const mensagem = document.querySelector("#mensagem");

    mensagem.textContent =
        "Olá, " + nome + "! Sua proxima aventura sera em" + destino + "!";

        formulario.reset();
})