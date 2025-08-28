function submitForm() {
    const nome1 = document.getElementById("nome1").value;
    const nome2 = document.getElementById("nome2").value;
    const nome3 = document.getElementById("nome3").value;
    const nome4 = document.getElementById("nome4").value;
    const nome5 = document.getElementById("nome5").value;
    const historia = document.getElementById("historia").value;

    const jsonData = {
        names: [nome1, nome2, nome3, nome4, nome5],
        message: historia,
    }

    const xhr = new XMLHttpRequest();
    xhr.open("POST", 'https://fsdt-contact.onrender.com/contact', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(jsonData));
    alert("Formulário enviado com sucesso!");
}