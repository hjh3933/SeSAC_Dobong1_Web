import { Component } from "react";

class ClassState extends Component {
  // 예전 방법)
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       banana: "바나나",
  //     };
  //   }
  // 요즘 방법)
  state = {
    banana: "바나나",
  };
  render() {
    const { banana } = this.state;
    return (
      <div>
        <div
          style={{
            color: "yellow",
            backgroundColor: "#000",
            fontWeight: "700",
          }}
        >
          {banana}
        </div>
        {/* 상속받는 component가 기본적으로 가지고 있는 setState 메소드를 사용하여 변경, 객체 형태로 작성  */}
        <button
          onClick={() => {
            this.setState({ banana: "banana" });
          }}
        >
          영어로 변경!
        </button>
      </div>
    );
  }
}
export default ClassState;
