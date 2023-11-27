import React from 'react';

const Noticia = ({ id, titulo, texto, noticiaLink }) => (
    <section id={id} className="conteudo">
        <div className="conteudo-texto">
            <h2>{titulo}</h2>
            <p>{texto}</p>
            <a href={noticiaLink} className="noticia-link" target="_blank" rel="noopener noreferrer">
                Leia a notícia
            </a>
        </div>
    </section>
);

export default Noticia;
