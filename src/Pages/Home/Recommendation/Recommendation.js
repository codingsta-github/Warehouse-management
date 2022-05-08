import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import re1 from "../../../Assets/Recommendation/re1.jpg";
import re2 from "../../../Assets/Recommendation/re2.jpg";
import re3 from "../../../Assets/Recommendation/re3.jpg";
import "./Recommendation.css";
const Recommendation = () => {
  return (
    <div className="recommendation">
      <h1>Our recommendations</h1>
      <Row xs={1} md={2} className="g-4 mx-2">
          <Col className="p-0 m-2">
            <Card>
              <Card.Img variant="top" src={re1} />
              <Card.Body>
                <Card.Title>Pre-Owned cars</Card.Title>
                <Card.Text>
                Find your dream car with Mercedes-Benz pre-owned cars.
                </Card.Text>
              </Card.Body>
              <Link to={'/'} className="link">Explore Offers</Link>
            </Card>
          </Col>
          <Col className="p-0 m-2">
            <Card>
              <Card.Img variant="top" src={re2} />
              <Card.Body>
                <Card.Title>Stylish. Just like you.</Card.Title>
                <Card.Text>
                The all-new Mercedes-Benz A-Class Limousine.
                </Card.Text>
              </Card.Body>
              <Link to={'/'} className="link">Explore Offers</Link>
            </Card>
          </Col>
          <Col className="p-0 m-2">
            <Card>
              <Card.Img variant="top" src={re3} />
              <Card.Body>
                <Card.Title>The Mercedes-Benz GLC</Card.Title>
                <Card.Text>
                Takes you to the most beautiful places . Connects you worldwide.
                </Card.Text>
              </Card.Body>
              <Link to={'/'} className="link">Explore Offers</Link>
            </Card>
          </Col>
      </Row>
    </div>
  );
};

export default Recommendation;
