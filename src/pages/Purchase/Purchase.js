import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Purchase = ({ product }) => {
  const [user, loading] = useAuthState(auth);
  const {
    img,
    description,
    name,
    brand,
    type,
    size,
    chipset,
    version,
    interFace,
    price,
    minOrder,
    available,
  } = product;

  const handlePurchase = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <h2 className="text-center text-4xl my-5">Happy Buying!!</h2>
      <div class="card lg:card-side bg-base-100 shadow-xl mx-11">
        <figure>
          <img className="w-2/4" src={img} alt={name} />
        </figure>
        <div class="card-body w-2/4">
          <h2 class="card-title">{name}</h2>

          <p>{description}</p>
          <p className="text-xl ">
            Price:{price}
            <small className="font-semibold">/piece</small>
          </p>
          <div class="overflow-x-auto">
            <table class="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Brand:</th>
                  <td>{brand}</td>
                </tr>
                <tr>
                  <th>Type:</th>
                  <td>{type}</td>
                </tr>
                <tr>
                  <th>{size ? "Size" : "Chipset"}</th>
                  <td>{size ? size : chipset}</td>
                </tr>
                <tr>
                  <th>{version ? "Version" : "Interface"}</th>
                  <td>{version ? version : interFace}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <form
        onSubmit={handlePurchase}
        className="grid grid-cols-1 gap-4 my-7 justify-items-center "
      >
        <label class="label block mr-52">
          <span class="label-text">Minimum order:</span>
        </label>
        <input
          type="number"
          disabled
          value={minOrder}
          id="order"
          className="input input-bordered w-full max-w-xs"
        />

        <label class="label block mr-60">
          <span class="label-text">Available:</span>
        </label>
        <input
          type="number"
          disabled
          value={available}
          className="input input-bordered w-full max-w-xs"
        />

        <input
          type="number"
          placeholder="Your Order"
          className="input input-bordered w-full max-w-xs"
        />

        <input
          type="text"
          name="name"
          disabled
          value={user.displayName}
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="email"
          name="email"
          disabled
          value={user.email}
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="number"
          name="phone"
          placeholder="Phone number"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="submit"
          value="Purchase"
          placeholder="Type here"
          className="btn btn-accent input input-bordered w-full max-w-xs text-white"
        />
      </form>
    </div>
  );
};

export default Purchase;
