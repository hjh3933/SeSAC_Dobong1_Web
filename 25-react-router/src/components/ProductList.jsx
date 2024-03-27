import ProductItem from "./ProductItem";

export default function ProductList({ products }) {
  return (
    <section className="ProductList">
      {products.map((product) => {
        return <ProductItem key={product.id} product={product} />;
      })}
    </section>
  );
}
