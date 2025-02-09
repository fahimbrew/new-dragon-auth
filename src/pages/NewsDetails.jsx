import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNavbar from "../layouts/RightNavbar";
import { FaArrowLeftLong } from "react-icons/fa6";

const NewsDetails = () => {
  const data = useLoaderData();
  //   console.log(data.data[0]);
  const news = data.data[0];
  //   console.log(news);
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="mx-auto w-11/12 mt-10 grid md:grid-cols-12 gap-5">
        <div className="md:col-span-8">
          <div className="card bg-base-100 shadow-sm">
            <figure>
              <img src={news.image_url} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{news.title}</h2>
              <p>{news.details}</p>
              <div className="card-actions">
                <Link
                  to={`/category/${news.category_id}`}
                  className="btn bg-[#D72050] text-white"
                >
                  <FaArrowLeftLong />
                  All News in this category
                </Link>
              </div>
            </div>
          </div>
        </div>
        <aside className="md:col-span-4">
          <RightNavbar />
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
