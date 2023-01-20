import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FirstPage from "./views/FirstPage";
import SecondPage from "./views/SecondPage";
import ThirdPage from "./views/ThirdPage";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">FirstPage</Link>
            </li>
            <li>
              <Link to="/secondPage">SecondPage</Link>
            </li>
            <li>
              <Link to="/thirdPage">ThirdPage</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/SecondPage" element={<SecondPage />} />
          <Route path="/ThirdPage" element={<ThirdPage />} />

          <Route path="/" element={<FirstPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
