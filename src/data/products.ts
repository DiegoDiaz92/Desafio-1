import type { Product } from "../types/Product";
import product01 from "../assets/images/product-01.png";
import product02 from "../assets/images/product-02.png";
import product03 from "../assets/images/product-03.png";
import product04 from "../assets/images/product-04.png";
import product05 from "../assets/images/product-05.png";
import product06 from "../assets/images/product-06.png";

export const products: Product[] = [
  {
    id: 1,
    name: "Ajuga reptans",
    price: 18.5,
    image: product01,
  },
  {
    id: 2,
    name: "Cordyline fruticosa",
    price: 29.9,
    image: product02,
  },
  {
    id: 3,
    name: "Crassula ovata",
    price: 24.9,
    image: product03,
  },
  {
    id: 4,
    name: "Cyperus rotundus",
    price: 32,
    image: product04,
  },
  {
    id: 5,
    name: "Delairea odorata",
    price: 21.5,
    image: product05,
  },
  {
    id: 6,
    name: "Datura metel",
    price: 27,
    image: product06,
  },
];
