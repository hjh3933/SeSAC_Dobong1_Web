import "../styles/SassComponent.scss";
import piglet from "../assets/piglet.jpg";

export default function Sass() {
  return (
    <>
      <h4>sass 사용</h4>
      <div className="div1">
        <div className="div2">
          <div className="div3"></div>
        </div>
        <button className="btn orangeRed">BTN1</button>
        <button className="btn btn--opacity">BTN2</button>
        <button className="btn btn--blue">BTN3</button>
      </div>
      {/* mixin, for, if, each */}
      {/* .container>.box1*3+p.circle*3+.box2{hi$}*4  */}
      <div className="container">
        <div className="box1"></div>
        <div className="box1"></div>
        <div className="box1"></div>
        <p className="circle"></p>
        <p className="circle"></p>
        <p className="circle"></p>
        <div className="box2">hi1</div>
        <div className="box2">hi2</div>
        <div className="box2">hi3</div>
        <div className="box2">hi4</div>
      </div>

      <h2>이미지 가지고 오기</h2>
      <h4>1. src 폴더 내부에 이미지 저장</h4>
      <h5>상대경로로 불러오기</h5>
      <img
        src="../assets.piglet.jpg"
        alt="src내부에 이미지가 있을 때는 경로명으로 접근할 수 없습니다."
      />
      <h5>이미지 import해서 가지고 오기</h5>
      <img src={piglet} alt="import 후 가지고오기" />
      <h5>css 파일에서 이미지 접근(background-image속성)</h5>
      <div className="src-img img-test"></div>

      <h4>2. public 폴더에 이미지 저장</h4>
      <h5>img 태그 사용하기</h5>
      {/* public은 / root로 경로 접근 */}
      <img src="/assets/piglet.jpg" alt="경로명으로 접근가능" />
      <img
        src={process.env.PUBLIC_URL + "/assets/piglet.jpg"}
        alt="경로명으로 접근가능 배포환경에서도 좀 더 안정적인 경로"
      />
      <h5>css 파일에서 이미지 접근(background-image속성)</h5>
      <div className="img-test  public-img"></div>

      <h2>사진넣기 실습</h2>
      <div className="practice">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <h2>애벌레 실습</h2>
      <div className="larva">
        <div className="body body1">
          <div className="eye eye-white">
            <div className="eye eye-black"></div>
          </div>
        </div>
        <div className="body body2"></div>
        <div className="body body3"></div>
        <div className="body body4"></div>
        <div className="body body5"></div>

        {/*  process.env.PUBLIC_URL: /public 폴더 경로 */}
        <img
          className="grass"
          src={process.env.PUBLIC_URL + "/assets/grass.png"}
          alt="잔디"
        />
      </div>

      <h2>실습 2번</h2>
      <div className="ballBox">
        <div className="ball pinkBall"></div>
        <div className="ball yellowBall"></div>
        <div className="ball greenBall"></div>
      </div>
    </>
  );
}
