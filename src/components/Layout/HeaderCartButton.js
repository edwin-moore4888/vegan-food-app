import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css"

export default function HeaderCartButton(props) {
    const [buttonHighlighted, setButtonHighlighted] = useState(false)

    const cartCtx = useContext(CartContext);

    const { items } = cartCtx

    const numberCartItems = items.reduce((currentNumber, item) => {
        return (
            currentNumber + item.amount
        );
    }, 0);


    const btnClasses = `${classes.button} ${buttonHighlighted ? classes.bump: ''}`

    useEffect(() => {
        if(items.length === 0) {
            return;
        }
        setButtonHighlighted(true);

        const timer = setTimeout(() => {
            setButtonHighlighted(false); 
        }, 300);

        return () => {
            clearTimeout(timer);
        };

    }, [items])
    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>
                Your Cart
            </span>
            <span className={classes.badge}>
                {numberCartItems}
            </span>
        </button>
    )
}