
//apiKEY

let api_key = '20710980e2565beef2ddbaa5ae0ae031';

let diferenciaKelvin = 273.15

let baseUrl = 'https://api.openweathermap.org/data/2.5/weather'

document.getElementById('botonBusqueda').addEventListener('click', () => {
    const  ciudad = document.getElementById('ciudadEntrada').value
    if (ciudad) {
        fetchDatosClima(ciudad);
    }
})

function fetchDatosClima(ciudad) {
    fetch(`${baseUrl}?q=${ciudad}&appid=${api_key}`)
    .then(data => data.json())
    .then(data =>mostrarDatosClima(data))
    
}


function mostrarDatosClima(data) {
    const divDatosClima = document.getElementById('datosClima');
    divDatosClima.innerHTML = '';

    const ciudadNombre = data.name
    const paisNombre = data.sys.country
    const temperatura = data.main.temp
    const descripcion = data.weather[0].description
    const humedad = data.main.humidity

    const ciudadTitulo = document.createElement('h2');
    ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`

    const temperaturaInfo = document.createElement('p');
    temperaturaInfo.textContent = `la temperatura es ${Math.floor(temperatura-diferenciaKelvin)}°c`;

    const humedadInfo = document.createElement('p');
    humedadInfo.textContent = `La humedad es : ${humedad}%`

    const descrpcionInfo = document.createElement('p');
    descrpcionInfo.textContent = ` la descripcion meterologica es: ${descripcion}`;

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(humedadInfo)
    divDatosClima.appendChild(descrpcionInfo)


}


