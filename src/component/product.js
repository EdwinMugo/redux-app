import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector} from "react-redux";
import { addToCart } from "../store/cart/cartSlice";
import { getProducts } from "../store/products/productSlice";
import statusCode from "../utilities/statusCode";

function Product() {
  const dispatch = useDispatch();
  const {data: products, status} = useSelector(state => state.products)



  // const [products, setProducts] = useState([]);

  useEffect(() => {
    // Api call by dispatching an action for fetchProducts
    dispatch(getProducts());

    // async function productData() {
    //   const api = await fetch("https://fakestoreapi.com/products");
    //   const res = await api.json();
    //   setProducts(res);
    // }
    // productData();
  }, []);
  if(status === statusCode.LOADING){
    return <p> Loading page......</p>
  }
  if(status === statusCode.ERROR){
    return <p> Something went wrong, try again later!!!</p>
  }

    const addAProduct = (product) => {
      // console.log('Adding a product:', product)
      // dispatch the acion
      dispatch(addToCart(product));
  }

  

  const cards = products.map((product) => (
    <div className="col-md-3" style={{ marginBottom: 10 }}>
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
          <Button variant="primary" onClick={() => addAProduct(product)}>
            Add To Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <div>
      <h1>Product Dashboard</h1>
      <div className="row">{cards}</div>
    </div>
  );
}

export default Product;
