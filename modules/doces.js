import getRouter from '../router/changeEvent.js';

export default function doces() {
    const div = document.getElementById("root");

    div.innerHTML = 
    `
    <h1>Curiosidades sobre Doces em Geral</h1>
    <p>Doces: pequenos prazeres que adoçam a vida, variando de simples chocolates a elaboradas sobremesas, proporcionando momentos de alegria e indulgência.</p>
    `;

    const buttonHome = document.createElement("button");
    buttonHome.innerText = "HOME";

    buttonHome.addEventListener("click", () => getRouter('/'));

    div.appendChild(buttonHome);

    return div;
}
