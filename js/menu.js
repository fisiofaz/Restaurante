let cart = [];

function addToCart(item, price) {
    cart.push({ item, price });
    alert(item + ' adicionado ao carrinho!');
}

function goToOrders() {
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = 'orders.html'; // Redireciona para página de pedidos
}
