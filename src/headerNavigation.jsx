function headerNavigation() {
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

};

export default headerNavigation;