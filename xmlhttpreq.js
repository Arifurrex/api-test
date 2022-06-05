const xml = () => {
    const xtp = new XMLHttpRequest();
    xtp.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
    xtp.onload =() => {
        const data = JSON.parse(xtp.responseText);  
        console.log(data);
    };
    xtp.send();
};

xml();