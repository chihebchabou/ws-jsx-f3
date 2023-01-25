import React from 'react';
import stay from './stay.jpg';

const CategoryItem = () => {
  const category = {
    categoryName: 'Stays',
    description: 'Homes, Boutique & more',
    image: stay,
  };
  return (
    <div className="col-md-3 pb-4">
      <div className="card">
        <img src={category.image} alt="" className="card-img-top" />
        <div className="card-body">
          <h3 className="text-primary">{category.categoryName}</h3>
          <p className="card-text">{category.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
