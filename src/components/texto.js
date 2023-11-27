import React from 'react';

const Texto = ({ id, titulo, texto }) => (
    <section id={id} className="conteudo">
        <div className="conteudo-texto">
            <h2>{titulo}</h2>
            <p>{texto}</p>
        </div>
    </section>
);

export default Texto;