import getRouter from '../router/changeEvent.js';

export default function home() {
    const div = document.getElementById("root");

    div.innerHTML =
    `
    <h1>Selecione alguma das curiosidades abaixo</h1>
    `;

    const candyButton = document.createElement("button");
    const cupcakeButton = document.createElement("button");
    const brigadeiroButton = document.createElement("button");

    candyButton.innerText = "Candy";
    cupcakeButton.innerText = "Cupcake";
    brigadeiroButton.innerText = "Brigadeiro";
    
    div.appendChild(candyButton);
    div.appendChild(cupcakeButton);
    div.appendChild(brigadeiroButton);
    
    candyButton.addEventListener("click", () => getRouter('/doces'));
    cupcakeButton.addEventListener("click", () => getRouter('/cupcakes'));
    brigadeiroButton.addEventListener("click", () => getRouter('/brigadeiro'));
}
