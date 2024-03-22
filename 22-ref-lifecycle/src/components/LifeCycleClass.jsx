import { Component } from "react";

class MyComponent extends Component {
  // mount 되었을 때
  componentDidMount() {
    console.log("classs component, mount됨!!");
  }
  // update 되었을 때
  componentDidUpdate() {
    console.log("classs component, update됨!!");
  }
  // unmount 예정일 때
  componentWillUnmount() {
    console.log("classs component, unmount됨!!");
  }
  render() {
    return (
      <>
        <p>MyComponent {this.props.number}</p>
      </>
    );
  }
}
class LifeCycleClass extends Component {
  state = {
    number: 0,
    visible: true,
  };

  changeNumberState = () => {
    this.setState({ number: this.state.number + 1 });
  };
  changeVisibleState = () => {
    this.setState({ visible: !this.state.visible });
  };
  render() {
    return (
      <>
        <button onClick={this.changeNumberState}>number + 1</button>
        <button onClick={this.changeVisibleState}>on/off</button>
        {this.state.visible && <MyComponent number={this.state.number} />}
      </>
    );
  }
}

export default LifeCycleClass;
