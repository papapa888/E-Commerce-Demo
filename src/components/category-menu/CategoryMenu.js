import React from "react";
import DirectoryCategory from '../directory-item/DirectoryCategory.js'
import './categories.styles.scss'

const CategoryMenu = ({categories}) => {
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return <DirectoryCategory key={category.id} {...category} />;
      })}
    </div>
  );
};

export default CategoryMenu;
