import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Latest = () => {
  return (
    <div className="w-11/12 mx-auto flex items-center gap-2 bg-red-50 my-10">
      <h3 className="text-white bg-rose-600 px-3 py-2">Latest</h3>
      <Marquee pauseOnHover={true} speed={100}>
        <Link>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum,
          voluptate.
        </Link>
        <Link>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum,
          voluptate.
        </Link>
        <Link>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum,
          voluptate.
        </Link>
        <Link>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum,
          voluptate.
        </Link>
        <Link>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum,
          voluptate.
        </Link>
      </Marquee>
    </div>
  );
};

export default Latest;
