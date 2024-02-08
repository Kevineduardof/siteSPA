import getRouter from '../router/changeEvent.js';

export default function cupcakes() {
    const div = document.getElementById("root");
    const img = document.createElement("img");
    img.src = "https://www.allrecipes.com/thmb/i9KCEbxUGQ1Sa4F7Gts7SGBOpoM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/157877-vanilla-cupcakes-ddmfs-4X3-0397-59653731be1d4769969698e427d7f5bc.jpg";

    div.innerHTML = 
    `
    <h1>Curiosidades sobre Cupcakes</h1>
    <p>Cupcake: um pequeno bolo para uma pessoa, geralmente assado em uma xícara ou forminha de papel alumínio, com várias coberturas e decorações.</p>
    `;

    const buttonHome = document.createElement("button");
    buttonHome.innerText = "HOME";

    buttonHome.addEventListener("click", () => getRouter('/'));

    div.appendChild(buttonHome);
    div.appendChild(img);

    return div;
}
