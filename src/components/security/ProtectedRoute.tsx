import { Navigate, useNavigate } from "react-router-dom";
import { NavData } from "../../constants/route";
import Friends from "../../pages/Friends";
import Home from "../../pages/Home";
import Notification from "../../pages/Notification";
import Profile from "../../pages/Profile";
interface Props {
  access: boolean;
  item: NavData;
}
const ProtectedRoute = ({ access, item }: Props) => {
  const navigate = useNavigate();
  if (!access) {
    return <Navigate to="/login" replace />;
  } else {
    switch (item.url) {
      case "/friends":
        return <Friends />;
      case "/profile":
        return <Profile />;
      case "/notifications":
        return <Notification />;
      case "/logout": {
        localStorage.removeItem("user");
        navigate(0);
      }
      default:
        return <Home />;
    }
  }
};

export default ProtectedRoute;
