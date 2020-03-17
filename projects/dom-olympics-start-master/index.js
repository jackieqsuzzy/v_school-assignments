// var header1 = document.getElementById('header')

// header1.innerHTML = "<span style='font-size:30px' > JavaScript Made This!!! </span>";

const container = document.getElementById("header")
const header = document.createElement("h1")
header.textContent = "JavaScript Made This!!!";
header.style.textAlign = 'center';
// header.className = 'header'
header.style.fontSize = '30px';
container.appendChild(header)


const name1 = document.createElement("p")
name1.innerHTML = "<span class = 'name' > Jackie </span><span> wrote the JavaScript </span>"
name1.className = "header"
container.appendChild(name1)

