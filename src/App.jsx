import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <nav
        style={{
          padding: "20px",
          backgroundColor: "#f4f4f4",
          display: "flex",
          gap: "20px",
        }}
      >
        <Link to="/">تسجيل الدخول</Link>
        <Link to="/register">إنشاء حساب</Link>
        <Link to="/dashboard">لوحة التحكم</Link>
      </nav>

      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App; 