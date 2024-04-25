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
import AddOrder from "./pages/Orders/AddOrder";
import Inventory from "./pages/inventory/Inventory";

const routes = [
  { path: "/", component: <Home /> },
  { path: "/login", component: <Login /> },
  { path: "/register", component: <Register /> },
  { path: "/panel", component: <Panel /> },
  { path: "/users", component: <Users /> },
  { path: "/menu", component: <Menus /> },
  { path: "/menu/add", component: <AddMenu /> },
  { path: "/menu/update/:id", component: <UpdateMenu /> },
  { path: "/menu/image/:id", component: <ImageMenu /> },
  { path: "/orders", component: <AddOrder /> },
  { path: "/inventory", component: <Inventory /> },
];

function App() {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            {routes.map((route) => (
              <Route path={route.path} element={route.component} />
            ))}
          </Routes>
        </BrowserRouter>
      </div>
    </ErrorBoundary>
  );
}

export default App;
