import React, { PropTypes } from 'react';
import CategoryBlock from '../CategoryBlock/CaterogyBlock.js';
require('./cateroryBar.scss');

const CategoryBar = (props) => {
  const categoriesArr = props.categories;
  const currentCategory = props.currentCategory;
  const categoryDOMArr = categoriesArr.map(val =>
    <CategoryBlock
      category={val}
      focus={currentCategory === val}
      key={val}
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
