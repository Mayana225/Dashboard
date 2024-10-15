const configForm = document.querySelector("form");
configForm.addEventListener("submit", function(event) {
    const email = document.getElementById("email").value;
    const password = document.getElementById("senha").value;

    if (!email || !email.includes("@")) {
        alert("Por favor, insira um e-mail válido.");
        event.preventDefault();
    } else if (password.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
        event.preventDefault();
    } else {
        alert("Configurações salvas com sucesso!");
    }
});

const toggleThemeButton = document.createElement("button");
toggleThemeButton.type = "button";
toggleThemeButton.textContent = "Alternar Tema";
document.body.appendChild(toggleThemeButton);

toggleThemeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");
});

document.querySelectorAll("nav a").forEach(link => {
    link.title = `Ir para a seção ${link.textContent}`;
});
document.getElementById("email").setAttribute("title", "Digite seu endereço de e-mail");
document.getElementById("senha").setAttribute("title", "Digite sua senha (mínimo de 6 caracteres)");
cancelButton.setAttribute("title", "Cancelar todas as alterações");

document.querySelector("select").setAttribute("title", "Selecione um relatório para visualizar.");
