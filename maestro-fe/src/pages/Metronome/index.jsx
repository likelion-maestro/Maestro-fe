import React from "react";
import Layout from "../../maestro-ui/Layout";
import NameCard from "./components/nameCard";
import MetronomeBox from "./components/matronomeBox";
import Singinfo from "./components/singInfo";
import ControlBox from "./components/controlBox";
import BeatBox from "./components/beatBox";
import PlayBox from "./components/playBox";

const Metronome = (props) => {
  return (
    <>
      <Layout>
        <NameCard name="좌승찬 우민성" people="7"></NameCard>
        <MetronomeBox />
        <Singinfo SingName="Pink Venom _ Black pink" Fast="Allegrissimo" />
        <ControlBox />
        <BeatBox />
        <PlayBox PlayTime="00:37" />
      </Layout>
    </>
  );
};

export default Metronome;
