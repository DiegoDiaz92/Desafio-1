import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Steps from "../../components/Steps/Steps";
import ProductGrid from "../../components/ProductGrid/ProductGrid";

function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Steps />
        <ProductGrid />
      </main>
    </>
  );
}

export default Home;