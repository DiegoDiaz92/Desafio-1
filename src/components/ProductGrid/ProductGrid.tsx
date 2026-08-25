import { useEffect, useMemo, useState } from "react";
import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";
import SectionTitle from "../SectionTitle/SectionTitle";
import type { Product } from "../../types/Product";
import fallback01 from "../../assets/images/product-01.png";
import fallback02 from "../../assets/images/product-02.png";
import fallback03 from "../../assets/images/product-03.png";
import fallback04 from "../../assets/images/product-04.png";
import fallback05 from "../../assets/images/product-05.png";
import fallback06 from "../../assets/images/product-06.png";

const productImages = [
  fallback01,
  fallback02,
  fallback03,
  fallback04,
  fallback05,
  fallback06,
];

const API_URL =
  "https://gist.githubusercontent.com/bugan/41d60ffa23fa0c4044cc138bf670780d/raw";

type SortOption =
  | "default"
  | "name-asc"
  | "price-asc"
  | "price-desc";

function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const [sortOption, setSortOption] = useState<SortOption>("default");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    async function loadProducts() {
      try {
        setIsLoading(true);
        setHasError(false);

        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Não foi possível carregar as plantas.");
        }

        const data: Product[] = await response.json();

        setProducts(data);
      } catch (error) {
        console.error(error);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    }

    loadProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    const minimum =
      minPrice === "" ? 0 : Number(minPrice);

    const maximum =
      maxPrice === "" ? Infinity : Number(maxPrice);

    const result = products.filter(
      (product) =>
        product.preco >= minimum &&
        product.preco <= maximum
    );

    switch (sortOption) {
      case "name-asc":
        return [...result].sort((a, b) =>
          a.name.localeCompare(b.name, "pt-BR")
        );

      case "price-asc":
        return [...result].sort(
          (a, b) => a.preco - b.preco
        );

      case "price-desc":
        return [...result].sort(
          (a, b) => b.preco - a.preco
        );

      default:
        return [...result].sort(
          (a, b) => a.ordem - b.ordem
        );
    }
  }, [products, minPrice, maxPrice, sortOption]);

  return (
    <section className="products" id="plantas">
      <div className="container">
        <SectionTitle
          subtitle="Conheça"
          title="Nossas plantas"
          align="center"
        />

        <div className="products__controls">
          <div className="products__filter">
            <label htmlFor="min-price">
              Preço mínimo
            </label>

            <input
              id="min-price"
              type="number"
              min="0"
              placeholder="R$ 0"
              value={minPrice}
              onChange={(event) =>
                setMinPrice(event.target.value)
              }
            />

            <label htmlFor="max-price">
              Preço máximo
            </label>

            <input
              id="max-price"
              type="number"
              min="0"
              placeholder="Sem limite"
              value={maxPrice}
              onChange={(event) =>
                setMaxPrice(event.target.value)
              }
            />
          </div>

          <div className="products__sort">
            <label htmlFor="product-sort">
              Ordenar por
            </label>

            <select
              id="product-sort"
              value={sortOption}
              onChange={(event) =>
                setSortOption(
                  event.target.value as SortOption
                )
              }
            >
              <option value="default">
                Padrão
              </option>

              <option value="name-asc">
                Nome
              </option>

              <option value="price-asc">
                Menor preço
              </option>

              <option value="price-desc">
                Maior preço
              </option>
            </select>
          </div>
        </div>

        {isLoading && (
          <p className="products__message">
            Carregando plantas...
          </p>
        )}

        {hasError && (
          <p className="products__message">
            Não foi possível carregar as plantas.
          </p>
        )}

        {!isLoading &&
          !hasError &&
          filteredProducts.length === 0 && (
            <p className="products__message">
              Nenhuma planta encontrada nesse intervalo.
            </p>
          )}

        {!isLoading && !hasError && (
          <div className="products__grid">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                image={productImages[index % productImages.length]}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default ProductGrid;