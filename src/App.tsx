import type { FC } from "react";
import React from "react";

import { TMP36 } from "views/TMP36";
import { Video } from "views/Video";

const App: FC = (): JSX.Element => (
  <div className={"align-items-center bg-light d-flex flex-column text-dark"}>
    <TMP36 />
    <Video />
  </div>
);

export { App };
