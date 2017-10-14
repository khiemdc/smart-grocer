import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Velocity from 'velocity-react';
import { VelocityTransitionGroup } from 'velocity-react';


const About = () =>
   <div>
     <Container style={{ minHeight: "80%" }}>
       <Hero backgroundImage="https://ak5.picdn.net/shutterstock/videos/13723595/thumb/4.jpg">
      <h1 className="w3-animate-fading">SmartGrocer
      <VelocityTransitionGroup enter={{animation: "slideDown"}} leave={{animation: "slideUp"}}>

             
            </VelocityTransitionGroup>
       </h1>
      <h2 className="w3-animate-fading">Meal Planning Done Right</h2>
    </Hero>
        <h1 className="text-center">Welcome to SmartGrocer!</h1>
        <Row>
        <Col size="md-12">
        </Col>
      </Row>
     <br/>
      <Row>
        <Col size="md-12">
          <h5 className="text-center">
            We all know going grocery shopping is a hassle. Even more so when you're squinting at the list you scribbled down on your way out the door! And it's all the same old recipes too. Well now SmartGrocer is here to help you break out of your rut without breaking the bank. 
          </h5>
         
         
        </Col>
      </Row>
      <Row>
      <Col size="md-12">
      </Col>
      </Row>
      </Container>
  </div>

export default About;
