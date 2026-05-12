import React from "react";
import ExperienceCard from "./ExperienceCard";
import { BetterUpExperience } from "../Objects/ExperienceObjects";

const BetterUp = () => {
  return (
    <ExperienceCard experience={BetterUpExperience}>
      <ul></ul>
    </ExperienceCard>
  );
};

export default BetterUp;
