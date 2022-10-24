import DressItem from './DressItem';
import classes from './DressList.module.css';

function DressList(props) {
  return (
    <ul className={classes.list}>
      {props.dresses.map((meetup) => (
        <DressItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          designHouse={meetup.designHouse}
          designer={meetup.designer}
        />
      ))}
    </ul>
  );
}

export default DressList;
