import React from "react";
import useThemeToggle from "../themeToggle";

const Header = () => {
    const { darkMode, setDarkMode } = useThemeToggle();

    const scrollToSection = (event, id) => {
        event.preventDefault(); // Evita o comportamento padrão do link
        const section = document.querySelector(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header id="mainHeader">
            <h1>Miguel Mochizuki</h1>
            <nav>
                <div id="nav-container">
                    <a href="#about" onClick={(e) => scrollToSection(e, "#about")}>Sobre</a>
                    <a href="#goals" onClick={(e) => scrollToSection(e, "#goals")}>Metas</a>
                    <a href="#plans" onClick={(e) => scrollToSection(e, "#plans")}>Planos</a>
                    <a href="#contact" onClick={(e) => scrollToSection(e, "#contact")}>Contato</a>
                </div>
            </nav>
            <button id="toggleTheme" onClick={() => setDarkMode(!darkMode)}>
                <i className={`fas ${darkMode ? "fa-sun" : "fa-moon"}`}></i> {darkMode ? "Modo Claro" : "Modo Escuro"}
            </button>
        </header>
    );
};

export default Header;
