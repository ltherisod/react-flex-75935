import { Badge } from "react-bootstrap";
import { TiShoppingCart } from "react-icons/ti";
import { useContext } from "react";
import { CartContext, useCart } from "../context/CartContext";

const CartWidgetIcons = () => {
    // const {cart}= useContext(CartContext)
    const {cart} = useCart()
    console.log(cart, 'carrito')
    return <div>
        <TiShoppingCart color='white' fontSize={'1.5rem'}/>
        <Badge bg="danger">{cart.length}</Badge>
    </div>
}
export default CartWidgetIcons