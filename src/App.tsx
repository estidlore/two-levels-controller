import type { FC } from "react";
import React from "react";

import { Diagram } from "views/Diagram";
import { Script } from "views/Script";
import { Simulation } from "views/Simulation";
import { TMP36 } from "views/TMP36";
import { Video } from "views/Video";

const App: FC = (): JSX.Element => (
  <div className={"align-items-center bg-light d-flex flex-column text-dark"}>
    <Diagram />
    <TMP36 />
    <Simulation />
    <Script />
    <Video />
  </div>
);

export { App };
