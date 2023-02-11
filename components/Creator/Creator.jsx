import { useEffect } from "react";
import { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import styles from "./Cretor.module.css";
import axios from "axios";

const Creator = () => {
  const [products, setProducts] = useState([]);
  const [bundle, setBundle] = useState([]);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [attributes, setAttribute] = useState([]);
  const regex = /(<([^>]+)>)/gi;
  const [quantity, setQuantity] = useState(0);

  const baseUrl = "https://cms.boxoniq.com/";
  const apiEndPoint = `${baseUrl}api/app/next/product-super-cat-web-bo.php`;
  const apiEndPoint2 = `${baseUrl}api/app/next/super-cat-bo.php`;

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(0);
    }
  };
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const getPosts = async (id) => {
    try {
      const res = await axios.post(apiEndPoint, {
        sequence: id,
      });
      setBundle(res.data);
      setPosts(res.data.product);
      setAttribute(res.data.product[0].attribute);
    } catch (error) {
      setError(error.message);
    }
  };

  // get function
  const getBabyProducts = async () => {
    try {
      const res = await axios.get(apiEndPoint2);
      setProducts(res.data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getPosts(1);
  }, []);

  useEffect(() => {
    getBabyProducts();
  }, []);

  console.log(bundle);

  return (
    <>
      <Container>
        {/* diaper section starts */}
        <div
          style={{ background: "#d9d9d9", padding: "20px 0", marginTop: "5%" }}
        >
          <Row>
            {products.map((product, i) => {
              return (
                <Col key={product.id}>
                  <Button
                    onClick={() => getPosts(i + 1)}
                    variant="none"
                    style={{
                      background: "#53900f",
                      fontSize: "20px",
                      color: "#fff",
                    }}
                  >
                    {product.name}
                  </Button>
                </Col>
              );
            })}
          </Row>
        </div>
        {/* diaper section ends */}
        {/* start bundle section */}
        <div className={styles.bundle_sec}>
          <div>
            <img style={{ width: "100px" }} src={bundle.img} alt="" />
          </div>
          <div>
            <h3>{bundle.name}</h3>
            <p>{bundle.desc}</p>
          </div>
        </div>
        {/* end bundle section */}
        {/*start shopping_cart */}
        <div>
          <Row>
            {posts.map((post) => {
              return (
                <Col sm={12} md={6} lg={6} key={post.id}>
                  <Card className={styles.card}>
                    <div className="d-flex">
                      <div>
                        <Card.Img
                          style={{ width: "100px", height: "100px" }}
                          variant="top"
                          src={post.image}
                        />
                      </div>
                      <div>
                        <Card.Body>
                          <Card.Title>{post.title}</Card.Title>
                          <Card.Text>
                            {post.short_detail.replace(regex, "")}
                            {/* current & old price */}
                            <div className="d-flex gap-4">
                              <h4>{post.item_price}</h4>
                              <h4 style={{ textDecoration: "line-through" }}>
                                {post.item_mrp}
                              </h4>
                              <h4>{post.item_discount}</h4>
                            </div>
                            {/* start pieces */}
                            {attributes.map((attribute) => {
                              return (
                                <Button variant="none" key={attribute.id}>
                                  {attribute.name}
                                </Button>
                              );
                            })}
                            {/* end pieces */}
                            {/* plus minus button */}
                            <div>
                              <Button onClick={handleIncrement}>+</Button>
                              {quantity}
                              <Button onClick={handleDecrement}>-</Button>
                            </div>
                          </Card.Text>
                        </Card.Body>
                      </div>
                    </div>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
        {/*end shopping_cart */}
      </Container>
    </>
  );
};

export default Creator;
