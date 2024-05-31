import MyCalendar from "./components/Calender";
import MyPieChart from "./components/MyPieChart";

const data = [
  { id: "A", value: 100 },
  { id: "B", value: 200 },
  { id: "C", value: 300 },
];

function App() {
  return (
    <div className="App">
      <h2>hi</h2>
      {/* <MyCalendar /> */}
      <div>dljfiwe;fe</div>
      <MyPieChart data={data} />
    </div>
  );
}

export default App;
