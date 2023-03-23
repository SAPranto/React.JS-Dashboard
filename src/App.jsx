import "./index.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import PrivateOutlet from "./pages/components/PrivateOutlet";

export default function App() {
  return (
    <>
      <Routes>
        <Route path={"/signup"} element={<SignUp />} />
        <Route path={"/signin"} element={<SignIn />} />
        <Route path="/*" element={<PrivateOutlet />}>
          <Route path="dashboard" element={<Dashboard/>} />
          <Route path="users" element={<Users/>} />
        </Route>
      </Routes>
    </>
  );
}
