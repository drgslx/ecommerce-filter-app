import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import "./Sidebar.css";

const Sidebar = ({handleChange, handleChangePrice, handleChangeColor, handleReset}) => {

  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <Category handleChange={handleChange} handleReset={handleReset}/>
        <Price handleChangePrice={handleChangePrice}/>
        <Colors handleChangeColor={handleChangeColor}/>
      </section>
    </>
  );
};

export default Sidebar;