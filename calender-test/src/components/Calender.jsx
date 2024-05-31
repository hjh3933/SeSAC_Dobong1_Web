import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/CalenderNew.scss";

function MyCalendar() {
  const [date, setDate] = useState(new Date());
  const [eventType, setEventType] = useState("blue");
  //   const eventType = "blue";
  const onChange = (newDate) => {
    setDate(newDate);
  };

  const handleColorChange = (color) => {
    console.log(color);
    setEventType(color);
  };

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      const currentDate = new Date(); // 현재 날짜를 가져옴
      const currentMonth = currentDate.getMonth(); // 현재 달을 가져옴
      const day = date.getDate();
      // day별로 비용을 가져와서 5가지 기준으로 구분
      // 각각의 class를 리턴, class는 state로 관리해서 색깔 선택 가능하도록 설정
      // if문은 설정값 기준으로 하기
      const month = date.getMonth();
      // 중요!! 실제로는 변경, 달 기준이 아니라 수입, 지출 내역 없으면 class 추가 없이 return 하도록 함
      if (month != currentMonth) return;

      if (day <= 9) {
        return "react-calendar__tile react-calendar__tile--red1";
      } else if (day <= 15) {
        return "react-calendar__tile react-calendar__tile--red2";
      } else if (day <= 31) {
        return "react-calendar__tile react-calendar__tile--red3";
      }
    }
    return null;
  };

  // 오늘날짜이면
  const tileContent = ({ date }) => {
    if (date.getDate() === new Date().getDate()) {
      // 간단한 text or icon 표시
      return "today";
    }
    return null;
  };

  return (
    <div>
      <h2>Calendar 연습</h2>
      <button onClick={() => handleColorChange("red")}>빨간색으로 변경</button>
      <button onClick={() => handleColorChange("blue")}>파란색으로 변경</button>
      <div className="react-calendar">
        <Calendar
          onChange={onChange}
          value={date}
          tileClassName={tileClassName}
          tileContent={tileContent}
        />
      </div>
    </div>
  );
}

export default MyCalendar;
