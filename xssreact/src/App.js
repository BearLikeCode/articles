import React from "react";
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom"
import Eval from "./pages/Eval";
import Href from "./pages/Href";
import DangerouslySetInnerHTML from './pages/DangerouslySetInnerHTML';
import Home from "./pages/Home";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/eval" exact element={<Eval />} />
              <Route path="/href" element={<Href />} />
              <Route path="/dangerously" element={<DangerouslySetInnerHTML />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
