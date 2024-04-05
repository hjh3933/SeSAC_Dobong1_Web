import { MatzipForm } from "../../types/interface";
import Card from "./Card";

interface Props {
  showContent: boolean;
  matzipInfo: MatzipForm[];
}
export default function CardContainer({ showContent, matzipInfo }: Props) {
  return (
    <>
      {showContent &&
        matzipInfo.map((el) => {
          return (
            <Card
              key={el.idx}
              title={el.title}
              imgSrc={el.imgSrc}
              desc={el.desc}
            ></Card>
          );
        })}
    </>
  );
}
