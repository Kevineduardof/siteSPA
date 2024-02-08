import getRouter from '../router/changeEvent.js';

export default function doces() {
    const div = document.getElementById("root");
    const img = document.createElement("img");
    img.src = "https://saborecia.com.br/wp-content/uploads/2020/08/MG_4421-scaled.jpg";

    div.innerHTML = 
    `
    <h1>Curiosidades sobre Doces em Geral</h1>
    <p>Doces: pequenos prazeres que adoçam a vida, variando de simples chocolates a elaboradas sobremesas, proporcionando momentos de alegria e indulgência.</p>
    `;

    const buttonHome = document.createElement("button");
    buttonHome.innerText = "HOME";

    buttonHome.addEventListener("click", () => getRouter('/'));

    div.appendChild(buttonHome);
    div.appendChild(img);

    return div;
}
