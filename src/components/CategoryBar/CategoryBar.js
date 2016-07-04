import React, { PropTypes } from 'react';
import CategoryBlock from '../CategoryBlock/CaterogyBlock.js';

const CategoryBar = (props) => {
  const categoriesArr = props.categories;
  const currentCategory = props.currentCategory;
  const categoryDOMArr = categoriesArr.map(val =>
    <CategoryBlock
      category={val}
      fucus={currentCategory === val}
    />
  );
  return (
    <div className="category-container">
      {categoryDOMArr}
    </div>
  );
};

CategoryBar.propTypes = {
  categories: PropTypes.array.isRequired,
  currentCategory: PropTypes.string,
};

export default CategoryBar;
