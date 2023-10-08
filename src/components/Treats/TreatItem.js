import { useContext } from 'react';

import classes from './TreatItem.module.css';
import TreatItemForm from './TreatItemForm';
import CartContext from '../../store/cart-context';

const TreatItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `₱${props.price}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.treat}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <TreatItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default TreatItem;
