import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/navigations/navbar";
import ProtectedRoute from "./components/security/ProtectedRoute";
import { ROUTE } from "./constants/route";
import Login from "./pages/Login";

function App() {
  const [login, setLogin] = useState(false);
  useEffect(() => {
    const local =
      localStorage.getItem("user") &&
      JSON.stringify(localStorage.getItem("user"));
    if (local) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, []);

  return (
    <BrowserRouter>
      {login && <Navbar />}
      <Routes>
        {ROUTE.map((item, i) => (
          <Route
            path={item.url}
            key={i}
            element={<ProtectedRoute item={item} access={login} />}
          />
        ))}
        <Route path="/login" element={<Login access={login} />} />
        <Route path="*" element={<NotFound access={login} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

function NotFound({ access }: { access: boolean }) {
  if (access) {
    return <Navigate to={"/"} replace />;
  } else {
    return <Navigate to={"/login"} replace />;
  }
}
