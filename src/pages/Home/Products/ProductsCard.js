import React from "react";
import { Link } from "react-router-dom";

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
          <p>{description.slice(0, 160)}...</p>
          <p>Minimum Order: {minOrder}</p>
          <p>
            Price: {price}
            <small>/piece</small>
          </p>
          <div className="card-actions justify-end">
            <Link to="/purchase">
              <button className="btn btn-primary">Buy now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
