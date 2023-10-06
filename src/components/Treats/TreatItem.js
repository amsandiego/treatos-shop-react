import classes from './TreatItem.module.css';

const TreatItem = (props) => {
  console.log(props);
  const price = `₱${props.price}`;

  return (
    <li className={classes.treat}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
    </li>
  );
};

export default TreatItem;
