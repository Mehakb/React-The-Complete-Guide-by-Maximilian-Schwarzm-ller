import { Fragment } from "react";
import classes from "./Header.module.css"
import mealsImg from "../../assets/meals.jpg"
import HeaderCartButton from "./HeaderCartButton";
const Header = ({ onShowCart }) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReatMeals</h1>
                <HeaderCartButton onClick={onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImg} alt="A table full of delicious food!" />
            </div>
        </Fragment>
    );
}

export default Header;
