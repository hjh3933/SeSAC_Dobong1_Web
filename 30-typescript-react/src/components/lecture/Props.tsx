interface Props1 {
  name: string;
}
export function Props1({ name }: Props1) {
  return <p>hello {name}</p>;
}

interface Props2 {
  width: string;
  height: string;
  color: string;
  // 여러개가 들어온다는 걸로 이렇게 써도 되지만 key를 모를때
  // [key: string]: string;
}
export function Props2(props: Props2) {
  const divStyle = {
    width: props.width,
    height: props.height,
    backgroundColor: props.color,
  };
  return <div style={divStyle}></div>;
}

interface Props3 {
  width: number;
  height: number;
  color?: string;
  text: string;
}
export function Props3(props: Props3) {
  const { width, height, color, text } = props;
  const divStyle: object = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: color ? color : "pink",
    textAlign: "center",
    lineHeight: `${height}px`,
  };
  return <div style={divStyle}>{text}</div>;
}
