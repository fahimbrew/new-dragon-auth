import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
// import { toast } from "react-toast";

const Login = () => {
  const { logIn } = useContext(AuthContext);
  //   const [success, setSuccess] = useState("");
  const location = useLocation();
  //   console.log(pathname);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.table({ email, password });
    // setSuccess("");
    logIn(email, password)
      .then((result) => {
        console.log(result.user);
        alert("User successfully logged in");
        e.target.reset();
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
        alert("Invalid Credentials");
      });
  };
  return (
    <div className="hero bg-base-100 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <fieldset className="fieldset">
              <label className="fieldset-label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              <label className="fieldset-label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </form>
          <p className="p-3">
            Do not have an account? Please{" "}
            <Link to={"/auth/register"} className="text-red-600">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
