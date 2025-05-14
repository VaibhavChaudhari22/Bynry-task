import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import ProfileDetail from "./pages/ProfileDetails"; // 🔁 Corrected import name to match component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
<Route path="/profile/:id" element={<ProfileDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
