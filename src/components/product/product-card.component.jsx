import "./product-card.styles.scss";
import { currencyFormat } from "../../utils/tools/converters/price-format.converter";
import { BuyButton } from "../general-ui/button.component";

const ProductCard = ({ index, product }) => {
  const { image, title, description, price } = product;
  let backColor = "";

  // eslint-disable-next-line default-case
  switch (index % 3) {
    case 0:
      backColor = "orange";
      break;
    case 1:
      backColor = "#3b3e6e";
      break;
    case 2:
      backColor = "#0b0b0b";
      break;
  }

  return (
    <div className="product-card">
      <img src={image} alt={image} />
      <h3>{title.substring(0, 20)}</h3>
      <p>{description.substring(0, 80)}</p>
      <h6>{currencyFormat(price)}</h6>
      <ul>
        <li>
          <i className="fa fa-star" aria-hidden="true"></i>
        </li>
      </ul>
      <BuyButton backColor={backColor}>Add To Cart</BuyButton>
    </div>
  );
};

export default ProductCard;
