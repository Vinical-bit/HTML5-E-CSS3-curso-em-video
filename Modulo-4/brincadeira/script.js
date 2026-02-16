const btnNao = document.getElementById('btn-nao');

// Função que move o botão
function foge() {
    const margem = 50;
    const maxX = window.innerWidth - btnNao.offsetWidth - margem;
    const maxY = window.innerHeight - btnNao.offsetHeight - margem;

    const xPos = Math.max(margem, Math.floor(Math.random() * maxX));
    const yPos = Math.max(margem, Math.floor(Math.random() * maxY));

    btnNao.style.position = 'fixed';
    btnNao.style.left = `${xPos}px`;
    btnNao.style.top = `${yPos}px`;
}

// Escuta tanto o mouse quanto o toque no celular
btnNao.addEventListener('mouseover', foge);
btnNao.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Impede que o clique aconteça no toque
    foge();
});

// Espera a página carregar totalmente
window.onload = function() {
    console.log("Script carregado com sucesso!");

    const campos = document.querySelectorAll('.campo-form');
    const btnEnviar = document.getElementById('btn-enviar');

    function validar() {
        // Verifica se todos os campos estão preenchidos
        let todosPreenchidos = true;
        
        campos.forEach(input => {
            if (input.value.trim() === "") {
                todosPreenchidos = false;
            }
        });

        console.log("Todos preenchidos?", todosPreenchidos);

        if (todosPreenchidos) {
            btnEnviar.style.pointerEvents = "auto";
            btnEnviar.style.opacity = "1";
        } else {
            btnEnviar.style.pointerEvents = "none";
            btnEnviar.style.opacity = "0.5";
        }
    }

    // Adiciona o evento em cada campo
    campos.forEach(input => {
        input.addEventListener('input', validar);
    });
};