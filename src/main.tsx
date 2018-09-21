import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from 'react-hot-loader';
import * as FastClick from 'fastclick';
import Route from "./router"
import './style/common.scss'
import 'antd-mobile/dist/antd-mobile.css';
import './config/rem'
import './api/axios'

(FastClick as any).attach(document.body);

if (((module as any).hot)) {
  (module as any).hot.accept(() => {
    ReactDOM.render(
      <AppContainer>
        <Route />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}

ReactDOM.render(
  <AppContainer>
    <Route />
  </AppContainer>,
  document.getElementById("app")
);