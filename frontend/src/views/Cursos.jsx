import React from "react";
import CursoEmVideo from "../../src/img/curso-em-video.jpg";
import Udemy from "../../src/img/udemy.png";
import Bradesco from "../../src/img/fundacao-bradesco.png";
import Google from "../../src/img/google.png";

export default function Cursos() {
  return (
    <>
      <a href="http://recodepro.org.br/processo-seletivo/" target="_blank" rel="noopener noreferrer">
        <img className="img" src="https://recodepro.org.br/wp-content/uploads/2022/01/recode_pro-logo-1.svg" alt="RecodePro" />
      </a>

      <a href="https://www.udemy.com/pt/courses/it-and-software/?price=price-free&sort=popularity" target="_blank" rel="noopener noreferrer">
        <img className="img" src={Udemy} alt="Udemy"/>
      </a>

      <a href="https://www.ev.org.br/areas-de-interesse/tecnologia" target="_blank" rel="noopener noreferrer">
        <img className="img" src={Bradesco} alt="Fundação Bradesco"/>
      </a>

      <a href="https://www.cursoemvideo.com/cursos/" target="_blank" rel="noopener noreferrer">
        <img className="img" src={CursoEmVideo} alt="Curso em Vídeo"/>
      </a>
      
      <a href="https://learndigital.withgoogle.com/ateliedigital/courses" target="_blank" rel="noopener noreferrer">
        <img className="img" src={Google} alt="Google"/>
      </a>
    </>
  );
}