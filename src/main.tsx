import * as React from "react";
import * as ReactDOM from "react-dom";
import { Hello } from "./components/Hello";
import { AppContainer } from 'react-hot-loader';

ReactDOM.render(
  <AppContainer>
    <Hello compiler="TypeScript" framework="React" />
  </AppContainer>,
  document.getElementById("app")
);