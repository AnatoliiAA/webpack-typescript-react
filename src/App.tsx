import * as React from "react";
import { RegistrationPage } from "./components/registration-page/RegistrationPage";
import { Global } from "@emotion/react";
import { reset, global } from "./theme";

export const App = (): JSX.Element => (
  <div>
    <Global styles={[reset, global]}></Global>
    <RegistrationPage />
  </div>
);
