import type { FC } from "react";
import React from "react";
import { TMP36 } from "views/TMP36";

const App: FC = (): JSX.Element => (
  <div className={"align-items-center bg-light d-flex flex-column text-dark"}>
    <TMP36 />
  </div>
);

export { App };
