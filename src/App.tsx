import React, { useState } from "react";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Header from "./components/Header";
import Footer from "./components/Footer";

export interface AppType {
  titleNumber?: number;
  setTitleNumber: React.Dispatch<React.SetStateAction<number>>;
}
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

        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Home titleNumber={titleNumber} setTitleNumber={setTitleNumber} />
            }
          />
          <Route
            path="/:id"
            element={<Detail setTitleNumber={setTitleNumber} />}
          />
        </Routes>
        {titleNumber === 1 ? <Footer /> : null}
      </div>
    </div>
  );
}

export default App;
