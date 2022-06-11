import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/product/product-card.component";
import { fetchProducts } from "../../store/product/product.action";
import { getProducts } from "../../store/product/product.selector";
import "./Product.style.scss";

const Product = () => {
  const { products, loading, error } = useSelector(getProducts);
  var x = useSelector(getProducts);
  console.log("****page*****");
  console.log(x);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  //dispatch(fetchProducts()); //!!! REfactor this, it is not for here

  return (
    <div className="product">
      {loading ? (
        <div>Loading</div>
      ) : (
        products.map((product, index) => (
          <ProductCard key={product.id} index={index} product={product} />
        ))
      )}
    </div>
  );
};

export default Product;
