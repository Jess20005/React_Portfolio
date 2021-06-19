import React from "react";
import "./style.css";
import { Card } from "react-bootstrap";

const Cards = () => {
  const cardInfo = [
    {
      image: "/image1.png",
      title: "GeoTreasure Adventures",
      text: "Our project provides the framework in which a user can begin hunting for a hidden geocache or even create one of their own.",
    },
    {
      image: "/image2.png",
      title: "Galaxy Grins",
      text: "This website was created by utilizing a NASA API for the picture of the day for the background and also a dad joke API to generate a random joke of the day.",
    },
    {
      image: "/image3.png",
      title: "Daily Tracker",
      text: "Here you will find a simple work day calendar that allows the user to enter events by time block and save them.",
    },
    {
      image: "/EmployeeDirectoryScreenshot.png",
      title: "Employee Directory",
      text: "This project I created my first employee directory with React.The process required breaking up the application's UI into components, manage component state, and respond to user events.",
    },
    {
      image: "/teamscreenshot.png",
      title: "Team Profile Generator",
      text: "This is a quick and efficient way to create a team with engineers, interns. You will have the option of creating one manager role with the first prompt.",
    },
    {
      image: "/TrackerScreenshot.png",
      title: "Fitness Tracker",
      text: "Here you will find a simple work day calendar that allows the user to enter events by time block and save them.",
      link: "www.google.com"
    },
  ];

  const renderCard = (card, index) => {
    return (
      <Card style={{ width: "10rem" }} key={index} className="box">
        {/* eslint-disable-next-line  */}
        <Card.Img variant="top" src="holder.js/100px100" src={card.image} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.text}</Card.Text>
          <Card.Link>{card.link}</Card.Link>
        </Card.Body>
      </Card>
    );
  };

  return <div className="row"> {cardInfo.map(renderCard)}</div>;
};

export default Cards;
