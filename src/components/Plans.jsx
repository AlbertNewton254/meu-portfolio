import React from "react";

const Plans = () => {
    return (
        <section className="section" id="plans">
            <h2>Planos de estudo</h2>
            <div className="plans-container">
                <div className="plan-item">
                    <h3>Aula avulsa</h3>
                    <ul className="without-dots">
                        <li>R$60,00 por uma hora</li>
                        <li>R$110,00 por duas horas</li>
                        <li>R$150,00 por três horas</li>
                    </ul>
                </div>
                <div className="plan-item">
                    <h3>Plano mensal</h3>
                    <ul className="without-dots">
                        <li>4 horas de aula em um mês, a R$180,00</li>
                    </ul>
                </div>
                <div className="plan-item">
                    <h3>Plano trimestral</h3>
                    <ul className="without-dots">
                        <li>12 horas de aula em três meses, a R$500,00</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Plans;
