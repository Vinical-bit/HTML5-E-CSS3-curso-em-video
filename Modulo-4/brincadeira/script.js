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

