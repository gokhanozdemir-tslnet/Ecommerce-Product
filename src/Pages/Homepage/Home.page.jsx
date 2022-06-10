import "./Home.style.scss";

import React from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../store/product/product.action";

const Home = () => {


  // console.log(products);

  const dispatch = useDispatch();

  const onclickhandler = () => {
    dispatch(fetchProducts());
  };

  return (
    <div>
      Home
      <button onClick={onclickhandler}>get</button>
    </div>
  );
};

export default Home;
