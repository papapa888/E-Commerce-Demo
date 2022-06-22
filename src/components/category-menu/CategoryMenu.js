import React from "react";
import Category from "../category/Category";
import './categories.styles.scss'

const CategoryMenu = ({categories}) => {
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return <Category key={category.id} {...category} />;
      })}
    </div>
  );
};

export default CategoryMenu;
