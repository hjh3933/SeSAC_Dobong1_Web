import { useDispatch, useSelector } from "react-redux";
import SkyblueButton from "../components/SkyblueButton";
import { check, next } from "../store/modules/mbti";
import styled from "styled-components";
import Prograss from "../components/prograss";

const Vs = styled.p`
  font-size: 2rem;
  padding-top: 1.5rem;
`;
const Question = styled.p`
  font-size: 1.5rem;
  color: #777;
`;
export default function Mbti() {
  const survey = useSelector((state) => state.mbti.survey);
  console.log(survey); //객체를 가지는 배열 {question, answer: [{text, result}]}
  const page = useSelector((state) => state.mbti.page); //1번임
  const dispatch = useDispatch();
  return (
    <>
      <Question>{survey[page - 1].question}</Question>
      <ul>
        {survey[page - 1].answer.map((el, index) => {
          return (
            <>
              <li key={index}>
                <SkyblueButton
                  text={el.text}
                  clickEvent={() => {
                    dispatch(next());
                    dispatch(check(el.result));
                  }}
                />
              </li>
              {index === 0 && <Vs>VS</Vs>}
            </>
          );
        })}
      </ul>
      <Prograss page={page} maxPage={survey.length} />
    </>
  );
}
