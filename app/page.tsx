import Header from "@/components/Header";
import ProductsGrid from "@/components/ProductsGrid";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-5">
        <ProductsGrid />
      </main>
      <Footer />
    </>
  );
}