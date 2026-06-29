function mostrar(id) {
  // Esconde todas as seções
  document.getElementById('inicio').style.display = 'none';
  document.getElementById('sobre').style.display = 'none';
  document.getElementById('contato').style.display = 'none';
  document.getElementById('habilidades').style.display = 'none';
  document.getElementById('projetos').style.display = 'none';
  document.getElementById('curiosidades').style.display = 'none';
  
  // Mostra apenas a escolhida
  document.getElementById('contato').style.display = 'block';

  // Mostra apenas a escolhida (Início ou Sobre)
  document.getElementById(id).style.display = 'block';

}

// Mostra "Início" por padrão
mostrar('inicio');

// ----------------------
// Contador de visitas
// ----------------------

let visitas = localStorage.getItem("Visitas") || 0;
visitas++;
localStorage.setItem("Visitas", visitas);

// Mostra no console
console.log(`Você visitou esta página ${visitas} vezes.`);

// Também mostra na página (precisa ter um <p id="contador"> no HTML)
document.getElementById("contador").textContent =
  `Você visitou esta página ${visitas} vezes.`
