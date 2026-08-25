import "./Steps.css";
import howToImage from "../../assets/images/how-to-image.png";

function Steps() {
  return (
    <section className="steps" id="como-fazer">
      <div className="container">
        <div className="steps__card">
          <img
            src={howToImage}
            alt="Plantas para sua casa"
            className="steps__image"
          />

          <div className="steps__content">
            <span>Como conseguir</span>

            <h2>minha planta</h2>

            <ol className="steps__list">
              <li>Escolha suas plantas</li>
              <li>Faça seu pedido</li>
              <li>Aguarde na sua casa</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Steps;