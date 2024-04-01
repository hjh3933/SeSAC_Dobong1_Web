import styled from "styled-components";

const PrograssContainer = styled.div`
  margin-top: 3rem;
`;
const Fil = styled.div`
  background-color: #777;
  width: 100%;
  height: 10px;
`;
const Guage = styled.div`
  background-color: skyblue;
  height: 100%;
  width: ${(props) => props.percent}%;
  transition: 0.4s;
`;

export default function Prograss({ page, maxPage }) {
  return (
    <PrograssContainer>
      <div>
        {page} / {maxPage}
      </div>
      <Fil>
        <Guage percent={(page / maxPage) * 100}></Guage>
      </Fil>
    </PrograssContainer>
  );
}
