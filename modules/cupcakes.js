import getRouter from '../router/changeEvent.js';

export default function cupcakes() {
    const div = document.getElementById("root");

    div.innerHTML = 
    `
    <h1>Curiosidades sobre Cupcakes</h1>
    <p>Cupcake: um pequeno bolo para uma pessoa, geralmente assado em uma xícara ou forminha de papel alumínio, com várias coberturas e decorações.</p>
    `;

    const buttonHome = document.createElement("button");
    buttonHome.innerText = "HOME";

    buttonHome.addEventListener("click", () => getRouter('/'));

    div.appendChild(buttonHome);

    return div;
}
