const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com',
        'X-RapidAPI-Key': '20f6ffa282msh05a9649f8ba9880p14d224jsn1343640c0cba'
    }
};

fetch('https://yahoo-weather5.p.rapidapi.com/weather?location=sylhet&format=json&u=f', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));