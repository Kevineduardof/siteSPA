import getRouter from '../router/changeEvent.js';

export default function brigadeiro () {
    const div = document.getElementById("root");
    const img = document.createElement("img");
    img.src = "https://i.panelinha.com.br/i1/228-q-2859-brigadeiro.webp";
    
    div.innerHTML = 
    `
    <h1>Curiosidades sobre o Brigadeiro</h1>
    <p>Brigadeiro: doce típico brasileiro, feito com leite condensado, chocolate em pó e manteiga, deliciosamente cremoso e envolto em granulado.</p>
    `;

    const buttonHome = document.createElement("button");
    buttonHome.innerText = "HOME";

    buttonHome.addEventListener("click", () => getRouter('/'));

    div.appendChild(buttonHome);
    div.appendChild(img);

    return div;
}
