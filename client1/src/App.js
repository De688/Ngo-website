import "./App.css";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Posts from "./pages/Posts/Posts";
import Mostrelevant from "./pages/MostRelevants/Mostrelevant";
import Allheaders from "./pages/Allheaders";
import Home from "./Home/Home";
import Login from "./pages/login/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Allheaders />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/signin" exact element={<Login />} />

          <Route path="/all_posts" element={<Posts />} />
          <Route path="/most_relevant" element={<Mostrelevant />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
