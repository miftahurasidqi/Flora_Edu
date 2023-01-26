import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/home";
import Colections from "./components/colections";
import TentangKami from "./components/tentangKami";
import Contact from "./components/contact";

import Login from "./components/login";
import Admin from "./components/admin";
import Dashboard from "./components/dashboard";
import Tanaman from "./components/tanaman";
import Profile from "./components/profile";

function App() {
  return (
    <Router>
      <Routes>
        {/* public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/colections" element={<Colections />} />
        <Route path="/tetangkami" element={<TentangKami />} />
        <Route path="/contact" element={<Contact />} />

        {/* admin Only */}
        <Route path="/login" element={<Login param="1" />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tanaman" element={<Tanaman />} />
        <Route path="/profile" element={<Profile />} />

        {/* not found */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
