import React from 'react';
import '../Price/Price.css';
import InputPrice from '../../Components/InputPrice';

const Price = ({ handleChangePrice }) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Price</h2>

        <label className="sidebar-label-container">
          <input onChange={handleChangePrice} type="radio" value="all" name="test2" />
          <span className="checkmark"></span>All
        </label>

        <InputPrice
          handleChangePrice={handleChangePrice}
          value={50}
          title="$0 - $50"
          name="test2"
        />

        <InputPrice
          handleChangePrice={handleChangePrice}
          value={100}
          title="$50 - $100"
          name="test2"
        />

        <InputPrice
          handleChangePrice={handleChangePrice}
          value={150}
          title="$100 - $150"
          name="test2"
        />

        <InputPrice
          handleChangePrice={handleChangePrice}
          value={200}
          title="Over $150"
          name="test2"
        />
      </div>
    </>
  );
};

export default Price;