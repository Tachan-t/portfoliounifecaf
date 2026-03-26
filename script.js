// Funcionalidade do Menu Hamburger (Mobile)
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Fecha o menu ao clicar em um link
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// --- Lógica da Modal de Evidências ---

// Seleciona os elementos da Modal
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("imgModalTarget");
const captionText = document.getElementById("modalCaption");
const closeModalBtn = document.querySelector(".close-modal");

// Seleciona TODOS os botões que abrem modal (para funcionar em todos os cards futuros)
const triggerButtons = document.querySelectorAll(".btn-trigger-modal");

// Adiciona o evento de clique em cada botão
triggerButtons.forEach(button => {
    button.addEventListener("click", function() {
        // Pega os dados dos atributos 'data-' do botão clicado
        const imgSrc = this.getAttribute("data-image");
        const imgCaption = this.getAttribute("data-caption");

        // Preenche a modal com os dados
        modalImg.src = imgSrc;
        modalImg.alt = imgCaption; // Acessibilidade
        captionText.innerHTML = imgCaption;

        // Mostra a modal adicionando a classe 'active'
        modal.classList.add("active");
        // Impede o scroll da página de fundo
        document.body.style.overflow = "hidden"; 
    });
});

// Função para fechar a modal
function fecharModal() {
    modal.classList.remove("active");
    // Devolve o scroll da página
    document.body.style.overflow = "auto"; 
    // Limpa o src para não dar 'flash' da imagem anterior na próxima vez
    setTimeout(() => { modalImg.src = ""; }, 300); 
}

// Fecha ao clicar no '×'
closeModalBtn.addEventListener("click", fecharModal);

// Fecha ao clicar fora da imagem (no fundo escuro)
modal.addEventListener("click", function(event) {
    // Verifica se o clique foi na div .modal (fundo) e não na imagem (.modal-content-img)
    if (event.target === modal) {
        fecharModal();
    }
});

// Fecha ao apertar a tecla 'Esc'
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape" && modal.classList.contains("active")) {
        fecharModal();
    }
});