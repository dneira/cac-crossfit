async function calcular() {
    const url = 'https://fitness-calculator.p.rapidapi.com/idealweight?gender=male&height=180';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'NsGiulldSWmshTkKXZoVfOlk6IuAp1NDVdsjsnVfRPLR2hGXYg',
            'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

calcular()