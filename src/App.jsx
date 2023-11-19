import Home from "./pages/Home";
import { Menu, Navbar, Sidebar } from "./components";
import { Routes, Route } from "react-router-dom";
import Error from "./pages/Error";

const App = () => {
  return (
    <>
      <Navbar />
      <Menu />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};
export default App;
