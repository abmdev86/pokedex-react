import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { appTheme } from "appTheme";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import routerRoutes from "mainRouter";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={appTheme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {routerRoutes.map((item) => (
            <Route path={item.path} key={item.id} element={item.element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
