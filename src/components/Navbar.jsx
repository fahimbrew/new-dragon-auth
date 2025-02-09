import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toast";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => alert("Successfully logged out"))
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="w-11/12 mx-auto flex items-center justify-between my-4">
      <div>{user?.email}</div>
      <div className="space-x-3">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/career"}>Career</Link>
      </div>
      <div className="flex items-center gap-1">
        <div>
          {user && user?.email ? (
            <div className="flex flex-col items-center justify-center">
              <img className="w-10 h-10 rounded-full" src={user.photoURL}></img>
              <span className="text-sm font-bold">{user?.displayName}</span>
            </div>
          ) : (
            <img src={userIcon} alt="" />
          )}
        </div>
        {user ? (
          <button onClick={handleLogout} className="btn btn-neutral">
            Sign-Out
          </button>
        ) : (
          <Link to={"/auth/login"} className="btn btn-neutral">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
