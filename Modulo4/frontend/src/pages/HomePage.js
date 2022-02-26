import React from "react";

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="img/home/portadalibros.jpg" alt="portadalibro" />
            </div>
            <div className="columnas">
                <div className="bienvenidos left">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nisi facere placeat incidunt magni quas quae impedit architecto esse velit inventore perspiciatis accusamus eius ea dolores, quia sint iusto enim.</p>
                </div>
                <div className="testimonios right">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">Gran Blog</span>
                        <span className="autor">Carlos Borges - Lectores.net</span>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default HomePage;