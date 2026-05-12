import React from "react";
import ExperienceCard from "./ExperienceCard";
import { RIFOExperience } from "../Objects/ExperienceObjects";

const RIFO = () => {
  return (
    <ExperienceCard experience={RIFOExperience}>
      <ul></ul>
    </ExperienceCard>
  );
};

export default RIFO;
