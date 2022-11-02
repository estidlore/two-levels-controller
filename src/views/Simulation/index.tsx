import type { FC } from "react";
import React from "react";

import { simulationImg } from "assets/imgs";
import { Section } from "components/Section";

const Simulation: FC = (): JSX.Element => {
  return (
    <Section title={"Simulación"}>
      <img src={simulationImg} width={720} />
    </Section>
  );
};

export { Simulation };
