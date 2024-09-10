import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  // const {id , title} = products[0];
  const renderList = products.map((product) => {
    const { id, title, image, category, price } = product;
    return (
      <Col lg={3} md={6} key={id}>
        <Link to={`/product/${id}`}>
        <Card className="card mb-4">
          <div className="image">
            <Card.Img
              className="img-fluid"
              variant="top"
              src={image}
              alt={title}
            />
          </div>
          <Card.Body className="content">
            <Card.Title className="header">{title}</Card.Title>
            <Card.Title className="meta price">$ {price}</Card.Title>
            <Card.Text className="meta">{category}</Card.Text>
          </Card.Body>
        </Card>
        </Link>
      </Col>
    );
  });

  return (
    <>
      <section className="product-list my-5">
        <Container>
          <Row>{renderList}</Row>
        </Container>
      </section>
    </>
  );
};

export default ProductComponent;
