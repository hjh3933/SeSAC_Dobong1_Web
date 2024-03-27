import { Link } from "react-router-dom";

export default function ProductItem({ product }) {
  return (
    <Link className="ProductItem" to={`/products/${product.id}`}>
      <ul>
        <li>상품명: {product.name}</li>
        <li>상세설명: {product.body.slice(0, 80)}</li>
      </ul>
    </Link>
  );
}
