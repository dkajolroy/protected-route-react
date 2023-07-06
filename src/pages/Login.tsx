import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
function Login({ access }: { access: boolean }) {
  if (access) {
    return <Navigate to="/home" replace />;
  }
  const navigate = useNavigate();
  const [user, setUser] = useState({ username: "" });
  function submit() {
    localStorage.setItem("user", JSON.stringify(user));
    navigate(0);
  }
  return (
    <div className="d-flex w-25 mx-auto flex-column gap-2 my-5 align-items-center">
      <input
        value={user.username}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            submit();
          }
        }}
        onChange={(e) => setUser({ username: e.target.value.trim() })}
        type="text"
        placeholder="Username"
        className="form-control"
      />
      <button onClick={submit} className="btn btn-primary px-5">
        Login
      </button>
    </div>
  );
}

export default Login;
