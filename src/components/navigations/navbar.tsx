import { Link } from "react-router-dom";
import { ROUTE } from "../../constants/route";

function Navbar() {
  return (
    <div className="d-flex justify-content-center align-items-center py-2 gap-5">
      {ROUTE.map((item, i) => (
        <Link to={item.url} key={i} className="d-flex ">
          <h2>{item.title}</h2>
          {item.url === "/notifications" ? (
            <span
              className="bg-success rounded-circle d-flex justify-content-center align-items-center text-white "
              style={{ width: "20px", height: "20px" }}
            >
              {" "}
              1
            </span>
          ) : null}
        </Link>
      ))}
    </div>
  );
}

export default Navbar;
