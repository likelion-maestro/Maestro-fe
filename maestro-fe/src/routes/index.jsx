import { BrowserRouter, Route, Routes } from "react-router-dom";
import Metronome from "../pages/Metronome";
import LandingPage from "../pages/LandingPage";
import Navigate from "../maestro-ui/Navigate";
import TeamList from "../pages/TeamPage/TeamList";
import TeamMake from "./../pages/TeamPage/TeamMake/index";
import TeamEdit from "../pages/TeamPage/TeamEdit";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Caveat+Brush&family=Orbitron:wght@900&display=swap");
 
   body{
     
        padding: 0;
        margin: 0;
        font-family: "NanumGothic", sans-serif;
    };
`;

// routes 경로 지정 파일
//pages에 만들고 싶은 페이지 만든 후에 export default 해주고 여기서 불러오면 된다.
// <Route exact path="/주소" element={<띄우고 싶은 페이지(컴포넌트) />} />
const Router = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Routes>
      <Route exact path="/Metronome" element={<Metronome />} />
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/Navigate" element={<Navigate />} />
      <Route exact path="/TeamList" element={<TeamList />} />
      <Route exact path="/TeamEdit" element={<TeamEdit />} />
      <Route exact path="/TeamMake" element={<TeamMake />} />
      <Route exact path="/LoginPage" element={<LoginPage />} />
      <Route exact path="/MainPage" element={<MainPage />} />

    </Routes>
  </BrowserRouter>
);

export default Router;
