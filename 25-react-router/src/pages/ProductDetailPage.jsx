import { useNavigate, useParams } from "react-router-dom";

export default function ProductDetailPage({ products }) {
  //   console.log(products);
  const params = useParams();
  //   console.log(params);
  //   console.log(params.productId);

  const navigate = useNavigate();

  const { productId } = useParams();
  const [targetProduct] = products.filter(
    (product) => Number(productId) === product.id
  );
  console.log(targetProduct);
  //{postId, id(판매번호), name(상품명), email(판매자), body(상세설명)}
  if (!targetProduct) {
    return (
      <main>
        <h1>존재하지 않는 상품입니다</h1>
      </main>
    );
  }
  return (
    <main>
      <h5>상세페이지</h5>
      <button onClick={() => navigate("/")}>홈으로 이동하기</button>
      <button onClick={() => navigate(-1)}>뒤로 가기</button>
      <ul>
        <li>판매번호: {targetProduct.id}</li>
        <li>상품명: {targetProduct.name}</li>
        <li>판매자: {targetProduct.email}</li>
        <li>상세설명: {targetProduct.body}</li>
      </ul>
    </main>
  );
}
