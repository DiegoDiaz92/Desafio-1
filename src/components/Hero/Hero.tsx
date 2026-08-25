import "./Hero.css";
import Newsletter from "../Newsletter/Newsletter";
import heroPlant from "../../assets/images/hero-plant.png";
import heroShape from "../../assets/images/hero-shape.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__container">
        <div className="hero__content">
          <span>Sua casa com as</span>

          <h1>melhores plantas</h1>

          <p>
            Encontre aqui uma vasta seleção de plantas para decorar a sua
            casa e torná-la uma pessoa mais feliz no seu dia a dia. Entre
            com seu e-mail e assine nossa newsletter para saber das
            novidades da marca.
          </p>

          <Newsletter />
        </div>

        <div className="hero__image">
          <img
            src={heroShape}
            alt=""
            className="hero__shape"
            aria-hidden="true"
          />

          <img
            src={heroPlant}
            alt="Planta decorativa"
            className="hero__plant"
          />
        </div>
      </div>
    </section>
  );
}