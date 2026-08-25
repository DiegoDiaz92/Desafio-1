import "./ProductCard.css";
import type { Product } from "../../types/Product";

interface ProductCardProps {
  product: Product;
  image: string;
}

function ProductCard({
  product,
  image,
}: ProductCardProps) {
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(product.preco);

  return (
    <article className="product-card">
      <div className="product-card__image">
        <img
          src={image}
          alt={product.name}
        />
      </div>

      <div className="product-card__content">
        <h3>{product.name}</h3>

        <span className="product-card__price">
          {formattedPrice}
        </span>

        <button
          type="button"
          className="buy-button"
        >
          Comprar
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </article>
  );
}

export default ProductCard;