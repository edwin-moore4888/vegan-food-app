import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';



export default function MealItem(props) {
    const price = `${props.price}kc`

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <img className={classes.image} src={props.image} />
                <div className={classes.price}>{price}</div>
                
            </div>
            <div>
                <MealItemForm />
            </div>
        </li>
    )
}