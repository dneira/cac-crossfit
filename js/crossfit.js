async function calcular(genero, altura) {
    const url = 'https://fitness-calculator.p.rapidapi.com/idealweight?gender='+genero+'&height='+altura;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'NsGiulldSWmshTkKXZoVfOlk6IuAp1NDVdsjsnVfRPLR2hGXYg',
            'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        document.getElementById('resultadoPeso').style.display = 'block';
        let metodos = result.data;
        //console.log(metodos);
        Object.entries(metodos).forEach(([key, value]) => {
            document.getElementById('metodos').innerHTML += "<li>"+ key +" : " + value +" Kg</li>";
        });
    } catch (error) {
        console.error(error);
    }
}

function calcularPeso() {
    let genero = document.getElementById('genero');
    let generoValue = genero.value;
    console.log(generoValue);
    let altura = document.getElementById('altura').value;
    console.log(altura);
    let resultado = calcular(generoValue, altura);
    //console.log(resultado);
}