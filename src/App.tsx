import React, { lazy, Suspense, useState } from "react";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

export interface AppType {
  setTitleNumber: React.Dispatch<React.SetStateAction<number>>;
}

const HomePage = lazy(async () => await import("./pages/Home"));
const DetailPage = lazy(async () => await import("./pages/Detail"));

function App() {
  const [titleNumber, setTitleNumber] = useState<number>(0);
  return (
    <div className="App">
      <div className="AppWrapper">
        {titleNumber === 0 ? (
          <div className="AppTitle">메인 페이지</div>
        ) : (
          <div className="AppTitle"> 상세 페이지</div>
        )}
        <Suspense
          fallback={<div className="NotData">잠시만 기다려주세요!</div>}
        >
          <Header />
          <Routes>
            <Route
              path="/"
              element={<HomePage setTitleNumber={setTitleNumber} />}
            />
            <Route
              path="/:id"
              element={<DetailPage setTitleNumber={setTitleNumber} />}
            />
          </Routes>
          {titleNumber === 1 ? <Footer /> : null}
        </Suspense>
      </div>
    </div>
  );
}

export default App;
