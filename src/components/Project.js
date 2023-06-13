import React from 'react';
// import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import turnUp from '../imgs/turnUp.png';
import soundBlog from '../imgs/soundBlog.png';
import thoughtSpot from '../imgs/thoughtSpot.png';
import JATE from '../imgs/JATE.png'
import portfolio from '../imgs/portfolio.png'
import Junkeez from '../imgs/Junkeez.png'
import './Project.css'
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
      <Card.Img variant="top" src={turnUp} />
     
      <Card.Body>
        <Card.Title>turnUp</Card.Title>
        <Card.Text>
          An application to track live events and tell you about the musician!
        </Card.Text>
        <Button class = 'btn' variant="primary" a href='https://siddz415.github.io/Turn-Up/' >Check it out!</Button>
      </Card.Body>
    </Card>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={soundBlog} />
        <Card.Body>
          <Card.Title>Soundblog</Card.Title>
          <Card.Text>
            An application to create an account, and post about your favorite artists! You can also search up their music and listen to it.
          </Card.Text>
          <Button variant="primary" a href='https://soundblog2-app.herokuapp.com/login' >Check it out!</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={thoughtSpot} />
        <Card.Body>
          <Card.Title>ThoughtSpot</Card.Title>
          <Card.Text>
            This is a back-end specific API for a social network, where users share their thoughts, interact with friends thoughts, and can manage a friend list.
          </Card.Text>
          <Button variant="primary" a href='https://github.com/jeremymccarter/Social_Network'>Check it out!</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={JATE} />
        <Card.Body>
          <Card.Title>JATE</Card.Title>
          <Card.Text>
          A progressive web application (PWA) text editor, installable, works offline, and saves text upon refresh or closing of page!
          </Card.Text>
          <Button variant="primary" a href='https://thawing-cliffs-16456.herokuapp.com/'>Check it out!</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Junkeez} />
        <Card.Body>
          <Card.Title>Needle/Junkeez!</Card.Title>
          <Card.Text>
          A music based social media site geared towards record collectors and audiophiles! Add albums to your favorites, look up albums for sale, check out your friends collection's, and comment and let them know what you think!
          </Card.Text>
          <Button variant="primary" a href='https://github.com/jhdk707/NeedleJunkies'>Check it out!</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={portfolio} />
        <Card.Body>
          <Card.Title>This website!</Card.Title>
          <Card.Text>
            The website you're currently on was also built by me, using react and various frameworks to help with the design. Check out my github page for more applications I've made!
          </Card.Text>
          <Button variant="primary" a href='https://github.com/jeremymccarter'>Check it out!</Button>
        </Card.Body>
      </Card>
      
      </div>
  );
}






export default Project