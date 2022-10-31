import { BrowserRouter, Route, Routes } from "react-router-dom";
import Metronome from "../pages/Metronome";

// routes 경로 지정 파일
//pages에 만들고 싶은 페이지 만든 후에 export default 해주고 여기서 불러오면 된다.
// <Route exact path="/주소" element={<띄우고 싶은 페이지(컴포넌트) />} />
const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/Metronome" element={<Metronome />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
