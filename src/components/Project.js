import React from 'react';
// import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import 'turnUp.png' from './imgs/turnUp.png';

// function Project(){
//     return (
//     <div>
//         Project!
//     </div>
// )}





function Project() {
  return (
    <div className="d-flex flex-wrap justify-content-evenly">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src='./imgs/turnUp.png' />
      <Card.Body>
        <Card.Title>turnUp</Card.Title>
        <Card.Text>
          An application to track live events and tell you about the musician!
        </Card.Text>
        <Button variant="primary" a href='https://github.com/siddz415/Turn-Up'>Go somewhere</Button>
      </Card.Body>
    </Card>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Soundblog</Card.Title>
          <Card.Text>
            An application to create an account, and post about your favorite artists! You can also search up their music and listen to it.
          </Card.Text>
          <Button variant="primary" a href='https://soundblog2-app.herokuapp.com/login' >Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>ThoughtSpot</Card.Title>
          <Card.Text>
            This is a back-end specific API for a social network, where users share their thoughts, interract with friends thoughts, and can manage a friend list.
          </Card.Text>
          <Button variant="primary" a href='https://github.com/jeremymccarter/Social_Network'>Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>This website!</Card.Title>
          <Card.Text>
            The website you're currently on was also built by me, using react and various frameworks to help with the design. Check out my github page for more applications I've made!
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      
      </div>
  );
}






export default Project