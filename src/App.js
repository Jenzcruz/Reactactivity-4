import React from 'react';
import './App.css';
import { Navbar, Nav, Container, Row, Col, Form, Button } from 'react-bootstrap';
function App() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Car Dealer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#cars">Cars</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <h1 id="home">Home Page</h1>
            <p>
              Princess just wants a new car.
              I have told her that hers will go far.
              'Oh, it's really not cool
              driving this crap to school.'
              'Do I need that emotional scar? '
              'The kids will all laugh at the rust.
              When we race, I'll be left in the dust! 
              I will save up some cash
              then we'll make a mad dash
              to the car dealer surely you trust'.
              'He will make us a wonderful deal
              and I'm sure you will know how I feel.
              I will love you so much, 
              My siblings... I won't touch.
              Just get me behind a new wheel'! 
              Now she'll be cruisin in style.
              She'll be happy for only awhile.
              There will always be better
              and we'll try hard to get her
              a car that will make princess smile."
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 id='cars'>Cars Page</h1>
            <img src="./FH4_Mitsubishi_Lancer_GSR_08_Front.webp" alt="Mitsubishi Lancer Evolution X GSR" />
            <p>
            The Mitsubishi Lancer Evolution X is the tenth and final generation of the Lancer Evolution, a sports sedan produced by Japanese manufacturer Mitsubishi Motors.<br/>
            By September 2005, Mitsubishi introduced a concept version of the next-gen Evolution at the 39th Tokyo Motor Show named the Concept-X, designed by Omer Halilhodžić at the company's European design centre.<br/>
            Mitsubishi unveiled a second concept car, the Prototype-X, at the 2007 North American International Auto Show (NAIAS).<br/>
The Lancer Evolution X sedan features a 4B11T 2.0L (1998cc) turbocharged, all-aluminium inline-4 GEMA engine. Power and torque depend on the market but all versions have at least 280 PS (206 kW; 276 hp). (JDM version), the American market version has slightly more. The UK models were reworked by Mitsubishi UK, in accordance with previous MR Evolutions bearing the FQ badge.<br/>
Options for the UK Evolutions are 300 hp (220 kW) and 360 hp (270 kW).
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 id='contact'>Contact Us</h1>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group controlId="formBasicTextarea">
                <Form.Label>Inquiry</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <footer className="bg-light text -muted py-3">
<Container>
<p className="text-center">
Copyright © WD42P Jose Jereza
</p>
</Container>
</footer>
</div>
);
}

export default App;