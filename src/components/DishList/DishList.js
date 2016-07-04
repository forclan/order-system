import React, { PropTypes } from 'react';
import Dish from '../Dish/Dish.js';
require('./dishList.scss');

const DishList = (props) => {
  const dishList = props.dishList;
  const dishListDOM = dishList.map(val =>
    <Dish
      price={val.price}
      imgSrc={val.src}
      description={val.description}
      name={val.name}
      number={val.number}
      clickAdd={() => props.clickAdd(val.name)}
      clickMinus={() => props.clickMinus(val.name)}
      key={val.name}
    />
  );
  return (
    <div className="dish-list">
      <div className="dish-category">
        <a href={`#${props.dishCategory}`}>
          {props.dishCategory}
        </a>
      </div>
      <div>
        {dishListDOM}
      </div>
    </div>
  );
};
DishList.propTypes = {
  dishList: PropTypes.array.isRequired,
  clickAdd: PropTypes.func.isRequired,
  clickMinus: PropTypes.func.isRequired,
  dishCategory: PropTypes.string.isRequired,
};

export default DishList;
