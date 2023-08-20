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
import Register from "./pages/Auth/Register";
import Home from "./pages/Home/Home";
import Panel from "./pages/Panel/Panel";
import UpdateMenu from "./pages/Menus/UpdateMenu";
import ImageMenu from "./pages/Menus/ImageMenu";

function App() {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/panel" element={<Panel />}></Route>
            <Route path="/users" element={<Users />}></Route>
            <Route path="/menu" element={<Menus />}></Route>
            <Route path="/menu/add" element={<AddMenu />}></Route>
            <Route path="/menu/update/:id" element={<UpdateMenu />}></Route>
            <Route path="/menu/image/:id" element={<ImageMenu />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ErrorBoundary>
  );
}

export default App;
