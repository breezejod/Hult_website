import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Nav" element={<Nav />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
