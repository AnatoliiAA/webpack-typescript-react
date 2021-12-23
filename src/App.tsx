import * as React from "react";
import { injectGlobal } from "@emotion/css";
import './helpers/reset-css';

injectGlobal`
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap");
`;



export const App = (): JSX.Element => <div></div>;
