import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import User from "./pages/User";
import JobPosting from "./pages/JobPosting";
import { SuperlancerPage } from "./pages/Superlancer";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<User />} />
        <Route path="/jobposting" element={<JobPosting />} />
        <Route path="/superlancer" element={<SuperlancerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
