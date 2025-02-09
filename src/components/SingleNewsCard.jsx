import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SingleNewsCard = ({ singleNews }) => {
  //   console.log(singleNews);
  const { image_url, author, title, details, _id } = singleNews;
  return (
    <div className="card bg-base-100 p-5 shadow-sm">
      <figure>
        <img src={image_url} alt="" />
      </figure>
      <div className="card-body">
        <div>
          <h2>Author : {author.name}</h2>
          <p>Published date : {author.published_date}</p>
        </div>
        <h2 className="card-title">{title}</h2>
        <p>
          <span>{details.slice(0, 150)}...</span>
          <Link to={`/details/${_id}`} className="text-yellow-500 font-bold">
            Read More
          </Link>
        </p>
      </div>
    </div>
  );
};
SingleNewsCard.propTypes = {
  singleNews: PropTypes.object,
};
export default SingleNewsCard;
