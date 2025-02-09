import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Auth = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Auth;
