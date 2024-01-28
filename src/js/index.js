const botao = document.querySelector(".btn-plataforma");
const elementoPLataformas = document.querySelector(".btn-plataforma .plataformas");

botao.addEventListener("click", () => {
    elementoPLataformas.classList.toggle("ativo");
});

