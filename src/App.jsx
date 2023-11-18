import Home from "./pages/Home";
import { Navbar, Sidebar } from "./components";
import { Routes, Route } from "react-router-dom";
import Error from "./pages/Error";

const App = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};
export default App;
