import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import styled from "styled-components";

// css
const Name = styled.span`
  font-weight: bold;
  color: red;
`;
const RealName = styled.span`
  font-weight: bold;
  color: blue;
`;
const StudentUl = styled.ul`
  background-color: pink;
`;

export default function Student() {
  const { studentName } = useParams();
  const navigate = useNavigate();
  console.log(studentName);
  const [queryName, setQueryName] = useSearchParams();
  console.log(queryName.get("name"));
  return (
    <StudentUl>
      <li>
        학생이름은 <Name>{studentName}</Name>입니다
      </li>
      {queryName.get("name") && (
        <div>
          실제 학생이름은 <RealName>{queryName.get("name")}</RealName>입니다
        </div>
      )}
      <button onClick={() => navigate(-1)}>이전 페이지로</button>
    </StudentUl>
  );
}
