import React from 'react';

export const Producto = ({item}) => {
  const {name, description, price, stock} = item;
  const stockBtn = `${stock ? 'lightblue' : 'tomato'}`;
  return (
    <div className="product-card">
      <h3>{name}</h3>
      <span>${price}</span>
      <p>{description}</p>
      <span style={{backgroundColor: stockBtn}}>
        {stock ? 'En Stock' : 'Sin Stock'}
      </span>
    </div>
  );
};
