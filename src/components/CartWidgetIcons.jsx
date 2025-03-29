import { Badge } from "react-bootstrap";
import { TiShoppingCart } from "react-icons/ti";
import { useContext } from "react";
import { CartContext, useCart } from "../context/CartContext";

const CartWidgetIcons = () => {
    // const {cart}= useContext(CartContext)
    const {cartQuantity} = useCart()
   
    return <div>
        <TiShoppingCart color='white' fontSize={'1.5rem'}/>
       { cartQuantity() > 0 && <Badge bg="danger">{cartQuantity()}</Badge>}
    </div>
}
export default CartWidgetIcons