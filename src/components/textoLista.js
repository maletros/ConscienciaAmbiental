import React from 'react';

const TextoLista = ({ id, titulo, texto, textoLista }) => (
  <section id={id} className="conteudo">
    <div className="conteudo-texto">
      <h2>{titulo}</h2>
      <p>{texto}</p>
      <ul>
        {textoLista.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  </section>
);

export default TextoLista;
