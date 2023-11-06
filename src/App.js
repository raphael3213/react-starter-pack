import logo from "./logo.svg";
import "./App.css";
import UseRefDemo from "./material/UseRefDemo";
import UseEffectDemo from "./material/UseEffectDemo";
import { Routes, Route } from "react-router-dom";
import UseEffectDemo1 from "./material/UseEffectDemo1";
import UseMemoDemo from "./material/UseMemoDemo";
import UseRefDemo1 from "./material/UseRefDemo1";
import { ThemeProvider } from "./material/contexts/ThemeProvider";
import UseContextDemo from "./material/UseContextDemo";
import UseContextDemo1 from "./material/UseContextDemo1";
import PrivateRoute from "./material/route-guards/PrivateRoute";
import PrivateComponent from "./material/PrivateComponent";
import Login from "./material/Login";

function App() {
  return (
    <ThemeProvider>
      <div className="flex justify-center ">
        <Routes>
          <Route path="/use-ref-demo" element={<UseRefDemo />} />
          <Route path="/login" element={<Login />} />

          <Route path="/use-ref-demo-1" element={<UseRefDemo1 />} />
          <Route path="/use-effect-demo" element={<UseEffectDemo />} />
          <Route path="/use-effect-demo-1" element={<UseEffectDemo1 />} />

          <Route path="/use-memo-demo" element={<UseMemoDemo />} />

          <Route path="/use-context-demo" element={<UseContextDemo />} />

          <Route path="/use-context-demo-1" element={<UseContextDemo1 />} />

          <Route path="/private" element={<PrivateComponent />} />

          {/* <Route path="/private" element={<PrivateRoute />}>
            <Route index element={<PrivateComponent />} />
          </Route> */}
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
