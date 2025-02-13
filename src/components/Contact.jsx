import React from "react";

const Contact = () => {
    return (
        <section className="section" id="contact">
            <h2>Contato</h2>
            <form id="contact-form" action="https://formsubmit.co/miguelmochizukisilva@gmail.com" method="POST">
                <input type="hidden" name="_captcha" value="false" />
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Mensagem</label>
                <textarea id="message" name="message" required></textarea>

                <button type="submit">Enviar</button>
            </form>
            <p>Ou entre em contato pelo telefone:</p>
            <a href="tel:+5583991998942">Ligue agora!</a>
        </section>
    );
};

export default Contact;
