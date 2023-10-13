import { useState, useEffect } from 'react';
import classes from './AvailableTreats.module.css';
import Card from '../UI/Card';
import TreatItem from './TreatItem';

const AvailableTreats = () => {
  const [treats, setTreats] = useState([]);

  useEffect(() => {
    const fetchTreats = async () => {
      const response = await fetch(
        'https://react-http-6b6db-default-rtdb.asia-southeast1.firebasedatabase.app/treats.json'
      );
      const data = await response.json();

      const loadedTreats = [];

      for (const key in data) {
        loadedTreats.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }

      setTreats(loadedTreats);
    };

    fetchTreats();
  }, []);

  const treatsList = treats.map((treat) => {
    return (
      <TreatItem
        key={treat.id}
        id={treat.id}
        name={treat.name}
        description={treat.description}
        price={treat.price}
      />
    );
  });

  return (
    <section className={classes.treats}>
      <Card>
        <ul>{treatsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableTreats;
