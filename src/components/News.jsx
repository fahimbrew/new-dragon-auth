import { useLoaderData } from "react-router-dom";
import SingleNewsCard from "./SingleNewsCard";

const News = () => {
  const { data: news } = useLoaderData();
  //   console.log(news);
  return (
    <div>
      <h2 className="font-semibold mb-5">Dragon News Home</h2>
      <p className="text-sm my-2 font-semibold">News Available {news.length}</p>
      <div className="space-y-5">
        {news.map((singleNews) => (
          <SingleNewsCard
            key={singleNews._id}
            singleNews={singleNews}
          ></SingleNewsCard>
        ))}
      </div>
    </div>
  );
};

export default News;
