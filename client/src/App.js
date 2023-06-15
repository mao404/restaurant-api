import { ErrorBoundary } from "react-error-boundary";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import Menus from "./pages/Menus"
import Users from "./pages/Users";

import "./App.css";
import Menus from "./pages/Menus/Menus";
import AddMenu from "./pages/Menus/AddMenu";
import Fallback from "./components/Fallback";
import Login from "./pages/Auth/Login";

function App() {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/users" element={<Users />}></Route>
            <Route path="/menu" element={<Menus />}></Route>
            <Route path="/menu/add" element={<AddMenu />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ErrorBoundary>
  );
}

export default App;
