import type { FC } from "react";
import React from "react";

import { Section } from "components/Section";

const videoUrl = "https://www.youtube.com/embed/Xq-FuDSxXFM";

const Video: FC = (): JSX.Element => {
  return (
    <Section title={"Video"}>
      <iframe height={480} src={videoUrl} width={720} />
    </Section>
  );
};

export { Video };
