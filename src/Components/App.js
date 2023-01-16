import React from "react";
import "./app.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Recomndation from "./Recomndation";
import Searchbar from "./Searchbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/search/:searchTerm"
            element={
              <div className="app-page">
                <Sidebar />
                <Searchbar />
              </div>
            }
          />

          <Route
            path="/"
            element={
              <div className="app-page">
                <Sidebar />
                <Recomndation />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
