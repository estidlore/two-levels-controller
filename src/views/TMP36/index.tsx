import type { FC } from "react";
import React from "react";

import { tmp36DatasheetPdf } from "assets/docs";

const TMP36: FC = (): JSX.Element => {
  return (
    <section>
      <p className={"fs-1 fw-bold mb-3 mt-5 text-center"}>{"Datasheet"}</p>
      <iframe height={1000} src={tmp36DatasheetPdf} width={700} />
    </section>
  );
}

export { TMP36 };
