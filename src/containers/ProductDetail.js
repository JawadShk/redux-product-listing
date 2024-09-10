import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeSelectedProduct, selectedProduct } from "../redux/actions/ProductAction";
import { Col, Container, Row } from "react-bootstrap";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(product);

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("error", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
    return() => {
      dispatch(removeSelectedProduct())
    };
  }, [productId]);

  console.log(productId);
  return (
    <>
      <Container className="single-product mt-5">
        {Object.keys(product).length === 0 ? (
          <div>...Loading</div>
        ) : (
          <Row className="bg-white">
            <Col>
              {/* <Row className="ui vertical divider">AND</Row> */}
              <Row className="mx-md-0 mx-2">
                <Col lg={5} className="border py-2 px-4 align-items-start">
                  <img className="img-fluid" src={image} />
                </Col>
                <Col
                  lg={7}
                  className="border py-2 px-4 align-items-start text-left"
                >
                  <h1>{title}</h1>

                  <span class="price-tag my-4">
                    <span>${price}</span>
                  </span>

                  <h3 className="category">{category}</h3>
                  <p className="description">{description}</p>
                  <div tabIndex="0">
                    <div className="hidden content">
                      <i className="shop icon"></i>
                    </div>
                    <div className="button">Add to Cart</div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
};

export default ProductDetail;
