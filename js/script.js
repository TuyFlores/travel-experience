const formulario = document.querySelector(#formCadastros);

formulario.addEvenlinstener("submit", function){
    event.preventDefault();

    const nome = document.querySelector("#nome").Value;
    const destino = document.querySelector("#destino").value;

    const mensagem = document.querySelector("#mensagem").value;

    mensagem.textContent =
        "Olá, " + nome + "Sua proxima aventura sera em" + destino + "!"

        formulario.reset();
}