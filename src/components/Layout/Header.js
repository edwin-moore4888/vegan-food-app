import { Fragment } from "react";
import classes from "./Header.module.css";
import mealImage from "../../assets/vegan_meal.jpg";
import HeaderCartButton from "./HeaderCartButton";
import { Button } from "bootstrap";
// import HeaderCartButton from "./HeaderCartButton";

export default function Header(props) {
    return (
        <Fragment>
                <header className={classes.header}>
                    <h1>Vegan Meals</h1>
                    <HeaderCartButton onClick={props.onShowCart}/>
                </header>
                <div className={classes['main-image']}>
                    <img src={mealImage} alt="vegan meal background"/>
                </div>
        </Fragment>
    )
}