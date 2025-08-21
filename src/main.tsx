import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store";
import TrendingPage from "./components/TrendingPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TrendingPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
