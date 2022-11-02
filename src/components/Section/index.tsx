import type { FC } from "react";
import React from "react";

import type { ISectionProps } from "./types";

const Section: FC<ISectionProps> = ({
  children,
  title,
}: ISectionProps): JSX.Element => {
  return (
    <section className={"my-4"}>
      <p className={"fs-1 fw-bold mb-3 text-center"}>{title}</p>
      {children}
    </section>
  );
};

export { Section };
