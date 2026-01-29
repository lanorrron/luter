'use client'
import { useState } from "react";
import CutSelector from "./components/custom/selectors/CutSelector";
import CustomStudio from "./components/custom/studio/CustomStudio";
import HeroCreateGarment from "./components/hero/HeroCreateGarment";

export default function Home() {


  return (
    <div>
      <HeroCreateGarment></HeroCreateGarment>
      <CutSelector></CutSelector>
      <CustomStudio></CustomStudio>
    </div>

  );
}
