let cart = [];

function addToCart(item, price) {
    cart.push({ item, price });
    alert(item + ' adicionado ao carrinho!');
    localStorage.setItem('cart', JSON.stringify(cart));  // Salva o carrinho no localStorage
}

// Função para redirecionar para a página de pedidos
function goToOrders() {
    window.location.href = 'orders.html';  // Redireciona para página de pedidos
}
