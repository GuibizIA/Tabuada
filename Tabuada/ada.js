//Selecione os elementos
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");
const multiplicationTitle = document.querySelector("#multiplication-title span");
const multiplicationTable = document.querySelector("#miltiplication-operations");

//Eventos
multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault

    const multiplicationNumber = +numberInput.value;
    const multiplicatorNumber = +multiplicationInput.value

    if(!multiplicationNumber || !multiplicationNumber) return; //Se algum dos números faltar não vai funcionar

    console.log(multiplicationNumber, multiplicatorNumber);
    createTable(multiplicationNumber, multiplicatorNumber);
});

//Funções
const createTable = (number, multiplicatorNumber) => {
    multiplicationTable.innerHTML = ""; //PARA LIMPAR O CAMPO DA OPERAÇÃO

    for(let i = 1; i <= multiplicatorNumber; i++)  {
        const result = number * i;

        const template = `<div class="row">
        <div class="operation">${number} x ${i} =</div>
        <div class="result">${result}</div>
        </div>`;

        const parser = new DOMParser();
        const htmlTemplate = parser.parseFromString(template, "text/html");
        const row = htmlTemplate.querySelector(".row");
        
        multiplicationTable.appendChild(row);
    }
    multiplicationTitle.innerHTML = number;
};



// //TESTE que funcionou
// document.addEventListener("DOMContentLoaded", () => {
//     const form = document.getElementById("multiplication-form");
//     const numberInput = document.getElementById("number");
//     const multiplicatorInput = document.getElementById("multiplicator");
//     const title = document.querySelector("#multiplication-title span");
//     const operationsContainer = document.getElementById("multiplication-operations");

//     form.addEventListener("submit", (event) => {
//         event.preventDefault(); // Impede o envio do formulário

//         const number = parseInt(numberInput.value);
//         const multiplicator = parseInt(multiplicatorInput.value);

//         title.textContent = number; // Atualiza o título
//         operationsContainer.innerHTML = ""; // Limpa operações anteriores

//         for (let i = 1; i <= multiplicator; i++) {
//             const result = number * i;
//             const row = document.createElement("div");
//             row.className = "row";
//             row.textContent = `${number} x ${i} = ${result}`;
//             operationsContainer.appendChild(row);
//         }
//     });
// });
