import React from 'react';
import logo from '../../images/primeLogo.png';
import './style.css';

function Footer() {
  return (
    <footer className="Footer">
      <img src={logo} alt="Prime Logo" />
      <span>
        Termos e aviso de
        {' '}
        privacidade Enviar feedback Ajuda © 1996-2021, Amazon.com, Inc. ou suas afiliadas
      </span>
    </footer>
  );
}

export default Footer;
