import classes from './AvailableTreats.module.css';

const DUMMY_TREATS = [
  {
    id: 'm1',
    name: 'Pork Liver',
    description: 'All natural dehydrated pork liver for dogs or cats',
    price: 195,
  },
  {
    id: 'm2',
    name: 'Cow Ear',
    description:
      'Highly digestible, low fat chew that can be given to puppies too',
    price: 125,
  },
  {
    id: 'm3',
    name: 'Chicken Feet',
    description:
      'Dehydrated chicken feet that can help your pet maintain joint health',
    price: 105,
  },
  {
    id: 'm4',
    name: 'Beef Skin Strips',
    description:
      'Long lasting treats perfect for cleaning teeth and maintaining healthy gums',
    price: 150,
  },
];

const AvailableTreats = () => {
  const treatsList = DUMMY_TREATS.map((treat) => {
    return <li>{treat.name}</li>;
  });

  return (
    <section>
      <ul>{treatsList}</ul>
    </section>
  );
};

export default AvailableTreats;
