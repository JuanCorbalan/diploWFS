import React from "react";
import '../styles/components/pages/RecomendacionesPage.css'
const RecomendacionesPage = (props) => {
    return (
        <section className="holder">
            <div className="criterios">
                <h2>Criterios de Recomendacion</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolor velit porro sint amet? Dicta, quasi ad? Delectus eaque illo, deleniti distinctio rerum debitis, eum, inventore et rem aperiam assumenda.</p>
                <p>LoRecomendacionesm dolor sit amet consectetur adipisicing elit. Ab provident quas earum, dolores non voluptatibus vel temporibus enim velit nulla accusantium ea beatae delectus minima sunt ullam! Nostrum, ea reprehenderit.</p>
            </div>
            <div className="recomendaciones">
                <h2>Recomendaciones</h2>
                <div className="librosrecomendados">
                    <div className="librorecomendado">
                        <img src="img/nosotros/libro1.jpg" alt="libro1" />
                        <h5>Libro 1</h5>
                        <h6>Genero</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cumque ipsa blanditiis ipsam quasi. Nemo, incidunt facilis pariatur consectetur animi, deleniti, beatae quae doloribus inventore est sapiente dolorum voluptate sunt!</p>
                    </div>
                    <div className="librorecomendado">
                        <img src="img/nosotros/libro2.jpg" alt="libro2" />
                        <h5>Libro 2</h5>
                        <h6>Genero</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cumque ipsa blanditiis ipsam quasi. Nemo, incidunt facilis pariatur consectetur animi, deleniti, beatae quae doloribus inventore est sapiente dolorum voluptate sunt!</p>
                    </div>
                    <div className="librorecomendado">
                        <img src="img/nosotros/libro3.jpg" alt="libro3" />
                        <h5>Libro 3</h5>
                        <h6>Genero</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cumque ipsa blanditiis ipsam quasi. Nemo, incidunt facilis pariatur consectetur animi, deleniti, beatae quae doloribus inventore est sapiente dolorum voluptate sunt!</p>
                    </div>
                    <div className="librorecomendado">
                        <img src="img/nosotros/libro4.jpg" alt="libro4" />
                        <h5>Libro 4</h5>
                        <h6>Genero</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cumque ipsa blanditiis ipsam quasi. Nemo, incidunt facilis pariatur consectetur animi, deleniti, beatae quae doloribus inventore est sapiente dolorum voluptate sunt!</p>
                    </div>
                    <div className="librorecomendado">
                        <img src="img/nosotros/libro5.jpg" alt="libro5" />
                        <h5>Libro 5</h5>
                        <h6>Genero</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cumque ipsa blanditiis ipsam quasi. Nemo, incidunt facilis pariatur consectetur animi, deleniti, beatae quae doloribus inventore est sapiente dolorum voluptate sunt!</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RecomendacionesPage;