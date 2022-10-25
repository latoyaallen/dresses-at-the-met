import Card from '../ui/Card';
import classes from './DressItem.module.css';

function DressItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <h3>{props.designHouse}</h3>
          <h3>{props.designer}</h3>
        </div>
        <div className={classes.actions}>
          <button>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default DressItem;
