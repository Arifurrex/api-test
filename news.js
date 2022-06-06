var details = document.getElementById("details");
const getdata = ()=>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'free-news.p.rapidapi.com',
            'X-RapidAPI-Key': '20f6ffa282msh05a9649f8ba9880p14d224jsn1343640c0cba'
        }
    };
    fetch('https://free-news.p.rapidapi.com/v1/search?q=Elon%20Musk&lang=en', options)
        .then(response => response.json())
        .then(response => htmlRender(response))
        .catch(err => console.error(err)); };

const htmlRender = (response) => {
    titleRes = response.articles;
    titleRes.forEach((x,i) => {
        details.insertAdjacentHTML('beforeend', `<p>author:${response.articles[i].author}</p> title:${response.articles[i].title}</p>
        </p> title:${response.articles[i].summary}</p></br>`);
    });
    
}
getdata();