// Carrega o status do pedido
function loadOrderStatus() {
    let status = localStorage.getItem('orderStatus') || 'Nenhum pedido';
    document.getElementById('current-status').textContent = 'Status: ' + status;
}

// Atualiza o status para 'A Caminho'
function updateStatus() {
    localStorage.setItem('orderStatus', 'A Caminho');
    loadOrderStatus();
}

// Inicializa o Mapa
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -23.550520, lng: -46.633308},
        zoom: 12
    });

    var marker = new google.maps.Marker({
        position: {lat: -23.550520, lng: -46.633308},
        map: map,
        title: 'Entregador'
    });
}

window.onload = function() {
    initMap();
    loadOrderStatus();
};
