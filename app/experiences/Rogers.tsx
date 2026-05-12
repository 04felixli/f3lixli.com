import React from "react";
import ExperienceCard from "./ExperienceCard";
import { RogersExperience } from "../Objects/ExperienceObjects";

const Rogers = () => {
  return (
    <ExperienceCard experience={RogersExperience}>
      <ul></ul>
    </ExperienceCard>
  );
};

export default Rogers;
