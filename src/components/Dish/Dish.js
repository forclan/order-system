import React, { PropTypes } from 'react';
require('./dish.scss');

const Dish = (props) => {
  const { price, imgSrc, description, name, number, clickAdd, clickMinus, isDirectionRow } = props;
  let dishTextDirection = 'dish-text-column';
  if (isDirectionRow) {
    dishTextDirection = 'dish-text-row';
  }
  return (
    <div className="dish" >
      {
        imgSrc ?
          <div className="dish-img" >
            <img src={imgSrc} role="presentation" width="100" height="100" />
          </div> :
          null
      }
      <div className={dishTextDirection} >
        <div className="dish-name">
          {name}
        </div>
        {
          description ?
            <div className="dish-description" display="none">
              {description}
            </div> :
            null
        }
        <div className="dish-price">
          <strong><span className="price-text">￥{price}</span></strong>/份
        </div>
        <div className="dish-button">
          {
            number > 0 ?
              <div className="dish-button-minus" onClick={clickMinus}>
              </div> :
              null
          }
          {
            number > 0 ?
              <div className="order-num">
                {number}
              </div> :
            null
          }
          <div className="dish-button-add" onClick={clickAdd}>
          </div>
        </div>
      </div>
    </div>
  );
};

Dish.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imgSrc: PropTypes.string.isRequired,
  description: PropTypes.string,
  number: PropTypes.number.isRequired,
  clickAdd: PropTypes.func.isRequired,
  clickMinus: PropTypes.func.isRequired,
  isDirectionRow: PropTypes.boolean,
};

export default Dish;
