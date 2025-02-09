import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);
  // console.log(categories);
  return (
    <div>
      <h3 className="font-semibold">All Category ({categories.length})</h3>
      <div className="flex flex-col gap-2">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.category_id}`}
            className={({ isActive }) =>
              `btn bg-rose-50 btn-sm ${isActive ? "text-red-800" : ""}`
            }
            key={category.category_id}
          >
            {category.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftNavbar;
