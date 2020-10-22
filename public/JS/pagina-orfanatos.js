//Create map
const map = L.map('mapid').setView([-22.6604826,-43.01528], 17);

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


// create icon

const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnch: [170,2]
})

// create popup overlay

const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth:240,
    minHeight: 240
}).setContent('IMADEL - Instituto Maria de Lourdes <a href="../info-orfanatos.html" class="choose-orphanage"><img src="./public/images/arrow-white.svg" </a>')

L
.marker([-22.6604826,-43.01528], {icon}).addTo(map)
.bindPopup(popup)
