import Modal from '../UI/Modal';
import classes from './Cart.module.css';


export default function Cart(props) {
    const cartItems = <ul className={classes['cart-items']}>{[{
        id: 'c1',
        name: 'vegan beer',
        amount: 2,
        price: 29
    }].map((item) => <li>{item.name}</li>)}</ul>

    return (
        <Modal onHideCart={props.onHideCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>1000</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}