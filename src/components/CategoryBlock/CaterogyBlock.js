import React, { PropTypes } from 'react';

const CategoryBlock = (props) => (
  <div
    className={props.focus ? 'category-fucus' : 'category'}
    key={props.category}
  >
    <a href={`#${props.category}`}>
      {props.category}
    </a>
  </div>
);
CategoryBlock.propTypes = {
  category: PropTypes.string.isRequired,
  focus: PropTypes.bool,
};

export default CategoryBlock;
