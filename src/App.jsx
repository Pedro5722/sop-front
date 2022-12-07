import { useState } from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import { Despesa } from "./pages/Despesa";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Despesa />
    </div>
  );
}

export default App;
