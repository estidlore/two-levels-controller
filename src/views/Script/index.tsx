import type { FC } from "react";
import React from "react";

import { masterScriptImg, slaveScriptImg } from "assets/imgs";
import { Section } from "components/Section";

const Script: FC = (): JSX.Element => {
  return (
    <Section title={"Código"}>
      <p className={"fs-3 fw-bold mb-2 mt-3 text-center"}>{"Master"}</p>
      <img src={masterScriptImg} width={720} />
      <p className={"fs-3 fw-bold mb-2 mt-3 text-center"}>{"Slave"}</p>
      <img src={slaveScriptImg} width={720} />
    </Section>
  );
};

export { Script };
