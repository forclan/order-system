import React, { PropTypes } from 'react';
import Dish from '../Dish/Dish.js';

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
    />
  );
  return (
    <div>
      {dishListDOM}
    </div>
  );
};
DishList.propTypes = {
  dishList: PropTypes.array.isRequired,
  clickAdd: PropTypes.func.isRequired,
  clickMinus: PropTypes.func.isRequired,
};

export default DishList;
