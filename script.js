const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeInput = document.querySelector("#qr-form input"); 
const qrCodeImg = document.querySelector("#qr-code img");

// Gerar QR CODE
function generateQrCode() {
    const qrCodeInputValue = qrCodeInput.value;  // Para pegar o valor do input

    if (!qrCodeInputValue) return;  // Se não tiver nenhum valor, não vou poder gerar nenhum QR Code

    qrCodeBtn.innerText = "Gerando código...";  // Para modificar o texto do botão
    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;  // Correção na interpolação de string

    qrCodeImg.addEventListener("load", () => {  // Para criar uma ação de criação de QR Code
        container.classList.add("active");  // Para carregar um QR Code de acordo com o que for inserido no input
        qrCodeBtn.innerHTML = "Código criado...";  // Para modificar o conteúdo do botão
    });
}

// Eventos
qrCodeBtn.addEventListener("click", () => {
    generateQrCode();
});

qrCodeInput.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
        generateQrCode();
    }
});

// Limpar área do QR Code
qrCodeInput.addEventListener("keyup", () => {
    if (!qrCodeInput.value) {
        container.classList.remove("active");
        qrCodeBtn.innerHTML = "Gerador de QR Code...";
    }
});
