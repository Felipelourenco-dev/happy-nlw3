const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}


//Create map
const map = L.map('mapid', options).setView([-22.6604826,-43.01528], 17);

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


// create icon

const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnch: [170,2]
})



L
.marker([-22.6604826,-43.01528], {icon})
.addTo(map)

/* Galeria de imagens */

function selectImagens(event) {
        const button = event.currentTarget;
        console.log(button.children)
        // remover todas as classes .active
        const buttons = document.querySelectorAll(".imagens button");
        buttons.forEach(removeActiveClass)
    
        function removeActiveClass(button) {
            button.classList.remove("active")
        }
    
        // selecionar a imagem clicada
        const image = button.children[0]
        const imageContainer = document.querySelector(".orfanatos-detalhes > img")
    
        // atualizar o container de image
    
        imageContainer.src = image.src;
    
        // adicionar a classe .active para este botao
        button.classList.add('active')
    }

