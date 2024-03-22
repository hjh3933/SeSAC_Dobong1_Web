import classNames from "classnames";
import Names from "classnames/bind";
import style1 from "../styles/style.module.css";

function ModuleCss() {
  const setting = Names.bind(style1);
  const isTrue = true;
  const value = "first";
  return (
    <div className={style1.container}>
      <h4>.Module.css 이용</h4>
      <div className={style1.box2}>
        <div>안녕하세요</div>
      </div>

      <br />
      <div className={`${style1.first} ${style1.second}`}>
        클래스 여러개 지정1 (백틱사용)
      </div>
      <div className={[style1.first, style1.second].join(" ")}>
        클래스 여러개 지정2 (join 이용)
      </div>
      <div className={classNames(style1.first, style1.second)}>
        classnames메소드 이용(install필요)
      </div>
      <hr />
      <div className={setting("first", "second")}>classnames 모듈사용1</div>
      <div className={setting("first", { second: false })}>
        {/* true면 second적용, false면 적용되지 않음 */}
        classnames 모듈사용2
      </div>
      <div className={setting(value, { second: isTrue })}>
        classnames 모듈사용3
      </div>
      <div></div>
    </div>
  );
}

export default ModuleCss;
