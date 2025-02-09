import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createUser, profileUpdate, emailVerification } =
    useContext(AuthContext);
  const [error, setError] = useState({});
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const conPassword = e.target.conPassword.value;
    setError("");
    if (password.length < 6) {
      return setError({
        error,
        lengthy: "Password Must be more than 6 character",
      });
    }
    if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/.test(password)) {
      return setError({
        error,
        special: "Must contain 1 uppercase and 1 special character",
      });
    }
    if (password != conPassword) {
      return setError({ error, match: "password doesn't match" });
    }
    console.table({ name, photo, email, password, conPassword });
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        emailVerification().then(() =>
          alert("email verification has been sent")
        );

        profileUpdate(name, photo);
        e.target.reset();
      })

      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="hero bg-base-100 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <fieldset className="fieldset">
              <label className="fieldset-label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Username"
                required
              />
              <label className="fieldset-label">Photo</label>
              <input
                name="photo"
                type="text"
                className="input"
                placeholder="Photo URL"
                required
              />
              <label className="fieldset-label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
                required
              />
              <label className="fieldset-label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
                required
              />
              <label className="text-red-700">{error.lengthy}</label>
              <label className="text-red-700">{error.special}</label>

              <label className="fieldset-label">Confirm Password</label>
              <input
                name="conPassword"
                type="password"
                className="input"
                placeholder="Confirm Password"
                required
              />
              <label className="text-red-700">{error.match}</label>

              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
