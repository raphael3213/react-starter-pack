import logo from "./logo.svg";
import "./App.css";
import UseRefDemo from "./material/UseRefDemo";
import UseEffectDemo from "./material/UseEffectDemo";
import { Routes, Route } from "react-router-dom";
import UseEffectDemo1 from "./material/UseEffectDemo1";
import UseMemoDemo from "./material/UseMemoDemo";

function App() {
  return (
    <div className="flex justify-center ">
      <Routes>
        <Route path="/use-ref-demo" element={<UseRefDemo />} />
        <Route path="/use-effect-demo" element={<UseEffectDemo />} />
        <Route path="/use-effect-demo-1" element={<UseEffectDemo1 />} />

        <Route path="/use-memo-demo" element={<UseMemoDemo />} />
      </Routes>
    </div>
  );
}

export default App;
