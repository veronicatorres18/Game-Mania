document.addEventListener("DOMContentLoaded", function() {
  const favoriteButtons = document.querySelectorAll('.btn-favorite');

  favoriteButtons.forEach(button => {
    button.addEventListener('click', function() {
      const productId = this.getAttribute('data-id');
      const icon = this.querySelector('.favorite-icon');

      // Defina o nome e o preço do produto (ajuste para cada produto)
      const productName = this.getAttribute('card-title');
      const productPrice = this.getAttribute('text-danger');

      // Obtenha a lista de favoritos do localStorage
      let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

      // Verifique se o produto já está na lista de favoritos
      const productIndex = favorites.findIndex(product => product.id === productId);
      if (productIndex > -1) {
        // Se já está, remove o produto
        favorites.splice(productIndex, 1);
        icon.src = "src/favoritos.svg"; // Altera para o ícone de coração vazio
      } else {
        // Se não está, adiciona o produto com todas as informações
        favorites.push({ id: productId, name: productName, price: productPrice });
        icon.src = "src/favoritos-preenchido.svg"; // Altera para o ícone de coração preenchido
      }

      // Salva novamente no localStorage
      localStorage.setItem('favorites', JSON.stringify(favorites));
    });

    // Defina o estado inicial com base no localStorage
    const productId = button.getAttribute('data-id');
    const icon = button.querySelector('.favorite-icon');
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (favorites.some(product => product.id === productId)) {
      icon.src = "src/favoritos-preenchido.svg";
    }
  });
});
// script.js
document.getElementById('cadastroForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita envio do formulário
  
  // Exibe o pop-up
  document.getElementById('popup').style.display = 'block';
});

function fecharPopup() {
  document.getElementById('popup').style.display = 'none';
}
