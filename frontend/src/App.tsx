import { Route, Routes } from "react-router";
import Landing from "./Landing";
import Room from "./Room";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/room" element={<Room />} />
      </Routes>
    </>
  );
}

export default App;
