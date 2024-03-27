import { Route, Routes } from "react-router-dom";
import { Test } from "./pages/Test";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import "./styles/Common.scss";
import ProductPage from "./pages/ProductPage";
import { useEffect, useState } from "react";
import axios from "axios";
import PhotoPage from "./pages/PhotoPage";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  const [products, setProducts] = useState([]);
  const [photos, setPhotos] = useState([]);
  const tempProductsData = [
    {
      id: 1,
      name: "다이슨 슈퍼소닉",
      email: "Eliseo@gardner.biz",
      body: "다이슨 슈퍼소닉 헤어드라이어를 위한 자석 부착형 스타일링 노즐, 스탠드 및 스타일링 액세서리.",
    },
    {
      id: 2,
      name: "SSD 1TB",
      email: "Jayne_Kuhic@sydney.com",
      body: "삼성전자 삼성 외장SSD T7 1TB 외장하드 1테라 USB3.2 Gen.2 Type-C MU-PC1T0 공식인증 (정품)",
    },
  ];
  // https://jsonplaceholder.typicode.com/comments
  // https://jsonplaceholder.typicode.com/photos

  const getProducts = async () => {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    // console.log(res.data.length);
    // console.log(res.data[0]);
    // {postid, id, name, email, body}
    //0부터 9까지 가져옴(slice => 0부터 10이전까지)
    setProducts(res.data.slice(0, 10));
  };
  const getPhotos = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/photos");
    // console.log(res.data.length);
    setPhotos(res.data.slice(0, 10));
    // console.log(res.data[0]);
    // {albumId, id, title, url, thumbnailUrl}
  };

  useEffect(() => {
    // async, await는 useEffect에서 사용불가이므로 함수 만든 후 실행
    getProducts();
    getPhotos();
  }, []);
  return (
    <div>
      {/* 공통부분, 헤더나 푸터 */}
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/test" element={<Test />} />
        <Route path="/products" element={<ProductPage products={products} />} />
        <Route path="/photos" element={<PhotoPage photos={photos} />} />
        <Route
          path="/products/:productId"
          element={<ProductDetailPage products={products} />}
        />
        {/* 404는 맨 마지막에 적는 것이 좋음 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
