import React from "react";
import "@styles/main.sass";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "@store/store";
import { Provider } from "react-redux";
import Home from "@pages/Home";
import { useTranslation } from "react-i18next";

const App: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route
              path="*"
              element={
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                  }}
                >
                  <h1>{t("404.title")}</h1>
                  <p>{t("404.description")}</p>
                </div>
              }
             />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
export default App;
