import React, { useState } from "react";
import Layout from "../../maestro-ui/Layout";
import NameCard from "./components/nameCard";
import MetronomeBox from "./components/matronomeBox";
import Singinfo from "./components/singInfo";
import ControlBox from "./components/controlBox";
import BeatBox from "./components/beatBox";
import PlayBox from "./components/playBox";
import Navigate from "../../maestro-ui/Navigate";

const Metronome = (props) => {
  //false면 정지
  const [stop, setStop] = useState("false");
  return (
    <>
      <Layout>
        <NameCard name="좌승찬 우민성" people="7"></NameCard>
        <MetronomeBox boolStop={stop} />
        <Singinfo SingName="Pink Venom _ Black pink" Fast="Allegrissimo" />
        <ControlBox />
        <BeatBox />
        <PlayBox PlayTime="00:37" setStop={setStop} />
        <Navigate />
      </Layout>
    </>
  );
};

export default Metronome;
