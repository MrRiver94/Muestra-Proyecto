import React from "react";
import PropTypes from "prop-types"; 
import { useCart } from "../../context/CardContext";
import "./IconList.css"
import { Link } from "react-router-dom";

function IconsList({ onClickCartIcon }) {
    const { cartItems } = useCart();
    const cartItemCount = cartItems.length;

    return (
        <ul className="user-icons">
            <li className="cart-icon">&#9825;</li>
            <li className="cart-icon"><Link to="/perfil">&#128100;</Link></li>
            <li className="cart-icon" onClick={onClickCartIcon}>
                <Link to="/carrito">&#128722;</Link>
                {cartItemCount > 0 && (
                    <span className="cart-count">{cartItemCount}</span>
                )}
            </li>
        </ul>
    );
}

IconsList.propTypes = {
    onClickCartIcon: PropTypes.func.isRequired,
};

export default IconsList;
