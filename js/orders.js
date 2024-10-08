let cart = JSON.parse(localStorage.getItem('cart')) || [];

function displayCart() {
    let orderItems = document.getElementById('order-items');
    let totalPrice = 0;

    cart.forEach(item => {
        let li = document.createElement('li');
        li.textContent = item.item + ' - R$' + item.price;
        orderItems.appendChild(li);
        totalPrice += item.price;
    });

    document.getElementById('total-price').textContent = 'Total: R$' + totalPrice;
}

function placeOrder() {
    localStorage.setItem('orderStatus', 'Em Preparo'); // Define o status inicial do pedido
    alert('Pedido realizado com sucesso!');
    window.location.href = 'dashboard.html'; // Redireciona para o dashboard
}

window.onload = displayCart;
