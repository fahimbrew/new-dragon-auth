import { FaGithub, FaGoogle } from "react-icons/fa";
const LoginWith = () => {
  return (
    <div>
      <h3 className="font-bold">Login With</h3>
      <div className="flex flex-col gap-4 mt-5">
        <button className="btn">
          <FaGoogle /> Login with Google
        </button>
        <button className="btn">
          <FaGithub></FaGithub> Login with Github
        </button>
      </div>
    </div>
  );
};

export default LoginWith;
