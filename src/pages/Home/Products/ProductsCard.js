import React from "react";

const ProductsCard = ({ product }) => {
  const { name, img, description, minOrder, price } = product;
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <p>Minimum Order: {minOrder}</p>
          <p>
            Price: {price}
            <small>/piece</small>
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
