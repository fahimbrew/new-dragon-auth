import moment from "moment";
import headerImg from "../assets/logo.png";
const Header = () => {
  // console.log(import.meta.env.VITE_a);
  return (
    <div className="flex items-center justify-center flex-col mt-5 gap-2">
      <div>
        <img className="w-[471px]" src={headerImg} alt="" />
      </div>
      <h3 className="text-gray-500">Journalism Without Fear or Favour</h3>
      <div>
        <h3>{moment().format("dddd, MMMM Do YYYY")}</h3>
      </div>
    </div>
  );
};

export default Header;
