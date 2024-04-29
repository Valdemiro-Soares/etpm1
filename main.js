var ul = document.querySelector('nav ul');
var menuBtn = document.querySelector('.menu-btn i');

function menuShow() {
    if (ul.classList.contains('open')) {
        ul.classList.remove('open');
    }else{
        ul.classList.add('open');
    }
}

// Seleciona os botões do menu
var btnProjetos = document.getElementById("btnProjetos");
var btnAgradecimentos = document.getElementById("btnAgradecimentos");

// Seleciona as seções de conteúdo
var projetos = document.getElementById("projetos");
var agradecimentos = document.getElementById("agradecimentos");

// Adiciona eventos de clique aos botões
btnProjetos.addEventListener("click", function() {
  // Mostra a seção de projetos e esconde a seção de agradecimentos
  projetos.style.display = "block";
  agradecimentos.style.display = "none";
});

btnAgradecimentos.addEventListener("click", function() {
  // Mostra a seção de agradecimentos e esconde a seção de projetos
  agradecimentos.style.display = "block";
  projetos.style.display = "none";
});

oficialmente República Democrática de São Tomé e Príncipe, é um país insular localizado no Golfo da Guiné, na costa equatorial ocidental da África Central. Consiste em duas ilhas principais, as ilhas de São Tomé e Príncipe, que distam cerca de 140 km uma da outra e cerca de 250 e 225 km da costa noroeste do Gabão, respectivamente.Outros países próximos são a Guiné Equatorial e os Camarões.</p>