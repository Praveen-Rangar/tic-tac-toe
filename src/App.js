import { BrowserRouter, Route, Routes } from "react-router-dom";
import Board from "./component/Board";
import Computer from "./component/Computer";
import HomePage from "./component/HomePage";

function App() {
  return (
    <div className="flex items-center justify-center w-full h-screen text-white bg-slate-800 App">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />}></Route>
          <Route path="/1vs1" element={<Board />}></Route>

          <Route path="/computer" element={<Computer />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
