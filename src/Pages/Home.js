import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Home.css';

function Home() {
  return <Row>
      <Col md={6} className="d-flex flex-direction-column align-items-center justify-content-center">
          <div>
              <h1>Share the moment with your friends</h1>
              <p>Chat App lets chit chat with your friends</p>
              <LinkContainer to="/login">
                  <Button variant="danger">Get started <i className="fas fa-comments home-message-icon"></i>
                 </Button>
                  </LinkContainer>
          </div>
          </Col>
          <Col md={6} className="home__bg"></Col>
  </Row> 
};

export default Home;