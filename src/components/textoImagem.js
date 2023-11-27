import React from 'react';

const TextoImagem = ({ id, imagemSrc, titulo, texto }) => (
    <section id={id} className="conteudo">
        <div className="conteudo-imagem">
            <img src={imagemSrc} alt={titulo} />
        </div>
        <div className="conteudo-texto">
            <h2>{titulo}</h2>
            <p>{texto}</p>
        </div>
    </section>
);

export default TextoImagem;
