// import cartReducer from "../../store/cart";
import { useDispatch } from "react-redux";
import { receiveItem } from "../../store/cart";

function ProduceDetails({ produce }) {
  const cartItem = {};

  const dispatch = useDispatch();

  const addToCart = (e) => {
    console.log(produce.id)
    // debugger
    dispatch(receiveItem(produce))
  };

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          onClick={addToCart}
          className={"plus-button" + (cartItem ? " selected" : "")}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;