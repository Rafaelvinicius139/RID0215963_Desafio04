import React, { useState, useEffect } from 'react';
import './Logo.css';
import MinhaImagem from "../Logo/eu.jpeg";

function Logo() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const frase = ['Olá,','sou','Rafael','Desenvolvedor','Front-End', ];

  const [mensagem, setMensagem] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < frase.length) {
      const timer = setTimeout(() => {
        setMensagem(prev => [...prev, frase[index]]);
        setIndex(index + 1);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [index, frase]);

  return (
    <div id='conteiner'>
      <div id='mensagens'>
        <h2>
          {mensagem.map((palavra, i) => (
            <React.Fragment key={i}>
              {palavra}
              {palavra === 'Rafael' ? <br /> : ' '}
            </React.Fragment>
          ))}
        </h2>

        <p>
          desenvolvedor Front-End especializado em criar interfaces <br />
          modernas, responsivas e centradas no usuário.<br />
          com HTML, CSS, JavaScript e React
        </p>

        <button>Download resumo</button>
      </div>

      <div id='imagem'>
        <div id="img">
          <img src={MinhaImagem} alt="Minha Foto" />
        </div>
      </div>
    </div>
  );
}

export default Logo;
