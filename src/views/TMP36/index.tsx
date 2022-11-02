import type { FC } from "react";
import React from "react";

import { tmp36DatasheetPdf } from "assets/docs";
import { Section } from "components/Section";

const TMP36: FC = (): JSX.Element => {
  return (
    <Section title={"TMP36 Datasheet"}>
      <iframe height={1080} src={tmp36DatasheetPdf} width={720} />
    </Section>
  );
};

export { TMP36 };
