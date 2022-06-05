var btn= document.getElementById('btn');
var details = document.getElementById('details');
console.log(btn);
btn.addEventListener('click', function() {
    const xml = (method,url,pdata) => {
        const xtp = new XMLHttpRequest();
        xtp.open(method, url);
        xtp.setRequestHeader('Content-type','application/json');
        xtp.onload = () => {
            const data = JSON.parse(xtp.responseText);
            htmlRender(data);
            console.log(data);
        };
        xml.onerror = () => {
            console.log('error is here');
        }
        xtp.send(JSON.stringify(pdata));
    }

    const htmlRender = (data) => {
        details.insertAdjacentHTML('beforeend', `<h2 style="color:green;">
        title:${data.title}</h2>`);
    };

    const getData = () => {
        xml("GET", "https://jsonplaceholder.typicode.com/todos/1");
    };
    const postData = () => {
        xml("POST", "https://jsonplaceholder.typicode.com/posts", {
            title: 'foo',
            body: 'bar',
            userId: 1,
         });
    };
    postData();
    // getData();
    
});


