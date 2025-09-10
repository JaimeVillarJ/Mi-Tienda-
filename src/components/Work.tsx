import "../styles/work.css";

export const Work = () => {
  return (
    <div>
        <h1></h1>
        <section className="join-us">
            <h2 className="join-title">🚀 ¡Trabaja con nosotros!</h2>
            <p className="join-subtitle">Únete a la familia del Supermercado y crece con nosotros</p>

            <div className="join-cards">
                <div className="employee-card">
                    <img src="assets/foto3.png" alt="Empleado feliz en el supermercado" />
                    <p>Ambiente positivo y motivador</p>
                </div>
                <div className="employee-card">
                    <img src="assets/foto2.png" alt="Cajera del supermercado"/>
                    <p>Oportunidades de crecimiento</p>
                </div>
                <div className="employee-card">
                    <img src="assets/foto1.png" alt="Empleado de estantería"/>
                    <p>Formación y trabajo en equipo</p>
                </div>
            </div>

            <button className="join-button">✨ ¡Únete ahora!</button>
        </section>
    </div>
  )
}
