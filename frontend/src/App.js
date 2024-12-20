import "./App.css";
import Post from "./post";
import Header from "./header";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
import IndexPage from "./pages/indexPage";
import LoginPage from "./pages/loginPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage/>} />

        <Route path="/login" element={<LoginPage/>} />
      </Route>
    </Routes>
  );
}

export default App;
