import React from 'react'
import InputColor from '../../Components/InputColor'
import './Colors.css'

const Colors = ({ handleChangeColor }) => {
  return (
    <>
      <div>
        <h2 className="sidebar-title color-title">Colors</h2>
        <label className="sidebar-label-container">
          <input onChange={handleChangeColor} type="radio" value="all" name="test3" />
          <span className="checkmark all"></span>
          All
        </label>

        <InputColor
          handleChangeColor={handleChangeColor}
          value="black"
          title="Black"
          name="test3"
          color="black"
        />

        <InputColor
          handleChangeColor={handleChangeColor}
          value="blue"
          title="Blue"
          name="test3"
          color="blue"
        />

        <InputColor
          handleChangeColor={handleChangeColor}
          value="red"
          title="Red"
          name="test3"
          color="red"
        />

        <InputColor
          handleChangeColor={handleChangeColor}
          value="green"
          title="Green"
          name="test3"
          color="green"
        />

        <label className="sidebar-label-container">
          <input
            onChange={handleChangeColor}
            type="radio"
            value="white"
            name="test3"
          />
          <span
            className="checkmark"
            style={{ background: "white", border: "2px solid black" }}
          ></span>
          White
        </label>
      </div>
    </>
  );
};

export default Colors;