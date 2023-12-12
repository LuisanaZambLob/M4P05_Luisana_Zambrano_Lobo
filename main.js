// Obtener coordenadas del cliente y pintar el mapa con marcador
navigator.geolocation.getCurrentPosition(
    function (position) {
        const latitud = position.coords.latitude;
        const longitud = position.coords.longitude;

        // Pintar el mapa con OpenStreetMap
        const mymap = L.map('map').setView([latitud, longitud], 15);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(mymap);

        // Pintar un marcador en las coordenadas obtenidas
        const marker = L.marker([latitud, longitud]).addTo(mymap);
    },
    function (error) {
        console.error('Error al obtener la ubicación:', error.message);
    }
);
