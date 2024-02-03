// selecionar botao
const botao  = document.querySelector(".btn-plataforma");

// pegar o elemento que precisa ser mostrado
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas-btn");

//pegar o click do usuario
botao.addEventListener("click", () => {
  elementoPlataformas.classList.toggle("ativo")
})