import React from "react";
import ExperienceCard from "./ExperienceCard";
import { TitaniumExperience } from "../Objects/ExperienceObjects";

const TitaniumAgency = () => {
  return (
    <ExperienceCard experience={TitaniumExperience}>
      <ul></ul>
    </ExperienceCard>
  );
};

export default TitaniumAgency;
