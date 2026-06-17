function mostrar(id) {
  // Esconde todas as seções
  document.getElementById('inicio').style.display = 'none';
  document.getElementById('sobre').style.display = 'none';
  
  // Mostra apenas a escolhida
  document.getElementById('contato').style.display = 'block';

  // Mostra apenas a escolhida (Início ou Sobre)
  document.getElementById(id).style.display = 'block';

}

// Mostra "Início" por padrão
mostrar('inicio');
