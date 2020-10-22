// Creat map
const map = L.map("mapid").setView([-22.5052109,-44.1243454], 15); 


// Creat and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
// Creat icon do mapa
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29,68],
})

let marker; 

// Creat and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // Remove o icon do map
    marker && map.removeLayer(marker)

    // Add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
})

// Add fotos
function addPhotoField() {
    
    const container = document.querySelector('#images')
    
    const fieldsContainer = document.querySelectorAll('.new-upload')
    
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
  
  const input = newFieldContainer.children[0]
  if(input.value == "") {
    return
  }
    //limpar o campo antes de add ao container de imagens
   input.value = ""
    // adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
  const span = event.currentTarget

  const fieldsContainer = document.querySelectorAll('.new-upload')

  if(fieldsContainer.length < 2){
    // limpar o valor do campo
    span.parentNode.children[0].value = ""
    return
  }
  // Deletar o campo
  span.parentNode.remove();

}

// selecionar sim ou não
function toggleSelect(event) {
  // retirar a class .active (ds botões)
  document.querySelectorAll('.button-select button')
  .forEach(button => button.classList.remove('active'))
  //colocar a class .active nesse botão clicado
  const button = event.currentTarget
  button.classList.add('active')
  // atualizar o input hidden com o valor selecionado
  const input = document.querySelector('[name="atendimento_fds"]')
  // verificar se sim ou não
  input.value = button.dataset.value
}
