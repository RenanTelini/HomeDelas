import React from "react";
import img1 from "../img/maeEbebe.jpg";
import img2 from "../img/mae.jpg";
import img3 from "../img/maeECrianca.jpg";

export default function Home() {
  return (
    <div className="container-fluid">
      <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100 h-500" src={img1} alt="Primeiro Slide" />
            <div class="carousel-caption d-none d-md-block">
              <input type="button" value="Vagas Disponiveis" />
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={img2} alt="Segundo Slide" />
            <div class="carousel-caption d-none d-md-block">
              <input type="button" value="Vagas Disponiveis" />
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={img3} alt="Terceiro Slide" />
            <div class="carousel-caption d-none d-md-block">
              <input type="button" value="Vagas Disponiveis" />
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Anterior</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Próximo</span>
        </a>
      </div>
    </div>
  );
}
