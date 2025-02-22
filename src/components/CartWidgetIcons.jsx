import { Badge } from "react-bootstrap";
import { TiShoppingCart } from "react-icons/ti";

const CartWidgetIcons = () => {
    return <div>
        <TiShoppingCart color='white' fontSize={'1.5rem'}/>
        <Badge bg="danger">5</Badge>
    </div>
}
export default CartWidgetIcons