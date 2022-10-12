import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import "@shopify/polaris/build/esm/styles.css";
import PreBuiltBenchmark from "./PreBuiltBenchmark";
import CustomBenchmark from "./CustomBenchmark";
import reportWebVitals from "./reportWebVitals";
import { AppProvider, Page } from "@shopify/polaris";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CustomBenchmark />,
  },
  {
    path: "/prebuilt",
    element: <PreBuiltBenchmark />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
    <Page title="Prettier Browser Benchmarking">
      <RouterProvider router={router} />
    </Page>
  </AppProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
