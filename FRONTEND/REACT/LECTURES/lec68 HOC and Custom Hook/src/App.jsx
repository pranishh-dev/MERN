import { Route, Routes } from "react-router";
import { NavBar } from "./components/NavBar";
import { AuthProfile } from "./components/profile";
import Home from "./components/home";
import { AuthDashboard } from "./components/dashboard";

const App = () => {
  let user = {
    name: "Pranish",
    role: "Doctor",
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<AuthDashboard {...user} />} />
          <Route
            path="/profile"
            element={<AuthProfile {...user} />}
          />
        </Route>
      </Routes>
    </>
  );
};
export default App;
