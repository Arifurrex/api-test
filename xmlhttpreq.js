var btn= document.getElementById('btn');
var details = document.getElementById('details');
var idnumber = 1;
console.log(btn);
btn.addEventListener('click', function() {
    const xml = () => {
        const xtp = new XMLHttpRequest();
        xtp.open("GET", "https://jsonplaceholder.typicode.com/todos/"+idnumber);
        xtp.onload = () => {
            const data = JSON.parse(xtp.responseText);
            htmlRender(data);
            console.log(data);
        };
        xtp.send();
    }

    const htmlRender = (data) => {
        details.insertAdjacentHTML('beforeend', `<h2 style="color:green;">
        title:${data.title}</h2>`);
    };
    idnumber++
    xml();
});


