document.addEventListener("DOMContentLoaded", () => {
    console.log("Script carregado com sucesso!");

    initThemeToggle();
    initHeaderNavigation();
});

/**
 * Alterna entre modo escuro e claro e mantém a preferência do usuário.
 */
function initThemeToggle() {
    const toggleButton = document.querySelector("#toggleTheme");

    if (!toggleButton) {
        console.warn("Botão de alternância de tema não encontrado.");
        return;
    }

    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        const isDarkMode = document.body.classList.contains("dark-mode");
        toggleButton.innerText = isDarkMode ? "☀️ Modo Claro" : "🌙 Modo Escuro";

        // Salva a preferência do tema no localStorage
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    });

    // Aplica o tema salvo
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        toggleButton.innerText = "☀️ Modo Claro";
    }
}

/**
 * Faz o menu rolar para a seção correspondente ao clicar.
 */
function initHeaderNavigation() {
    const sections = document.querySelectorAll(".header-section");

    sections.forEach(section => {
        section.addEventListener("click", (event) => {
            event.preventDefault(); // Impede o comportamento padrão de navegação

            const target = section.querySelector("a").getAttribute("href");
            const targetElement = document.querySelector(target);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth", // Habilita a rolagem suave
                    block: "start"
                });

                // Remove a classe ativa de todas as seções e aplica na clicada
                sections.forEach(sec => sec.classList.remove("active"));
                section.classList.add("active");
            }
        });
    });

    // Monitora o scroll e destaca a seção visível
    window.addEventListener("scroll", () => {
        let scrollPos = window.scrollY;

        sections.forEach(section => {
            const target = section.querySelector("a").getAttribute("href");
            const targetElement = document.querySelector(target);

            if (targetElement) {
                const sectionTop = targetElement.offsetTop - 50;
                const sectionHeight = targetElement.offsetHeight;

                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    sections.forEach(sec => sec.classList.remove("active"));
                    section.classList.add("active");
                }
            }
        });
    });
}
