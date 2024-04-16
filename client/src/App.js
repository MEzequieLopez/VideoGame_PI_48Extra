import './App.css';
import { Route, Routes } from "react-router-dom";
import Detail from "./views/detail/detail.component";
import Home from "./views/home/home.component";
import Landing from "./views/landing/landing.component";
import "./App.css";
import Create from "./views/create/create.component.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact  path="/home" element={<Home />} />
        <Route path="/home/:id" element={<Detail />} />
        <Route path="/form" element={<Create />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
