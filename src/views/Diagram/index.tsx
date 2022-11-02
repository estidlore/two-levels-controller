import type { FC } from "react";
import React from "react";

import { activitiesDiagramImg } from "assets/imgs";
import { Section } from "components/Section";

const Diagram: FC = (): JSX.Element => {
  return (
    <Section title={"Diagrama de Actividades"}>
      <img src={activitiesDiagramImg} width={720} />
    </Section>
  );
};

export { Diagram };
