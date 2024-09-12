import { useSelector, useDispatch} from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { removeItem } from "../store/cart/cartSlice";

function Cart() {
  const products = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    // dispatch a remove action
    dispatch(removeItem(id));
  }

  
  const cards = products.map((product) => (
    <div className="col-md-12" style={{ marginBottom: 10 }}>
      <Card key={product.id} className="h-100">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: 100, height: 130 }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>${product.price}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ background: "white", textAlign: "center" }}>
          <Button variant="danger" onClick={() => removeFromCart(product.id)}>
            Remove Item
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

    return (
      <div>
        <div className="row"> 
             {cards}
        </div>
          </div>
    )
  }
  
  export default Cart;