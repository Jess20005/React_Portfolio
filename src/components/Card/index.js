import React from "react";
import "./style.css";
import { Card } from "react-bootstrap";

const Cards = () => {
  const cardInfo = [
    {
      image: "/image1.png",
      title: "GeoTreasure Adventures",
      text: "Our project provides the framework in which a user can begin hunting for a hidden geocache or even create one of their own.",
      link: "https://geotreasureadventures.herokuapp.com/",
    },
    {
      image: "/image2.png",
      title: "Galaxy Grins",
      text: "This website was created by utilizing a NASA API for the picture of the day for the background and also a dad joke API to generate a random joke of the day.",
      link: "https://jess20005.github.io/API_Project/",
    },
    {
      image: "/image3.png",
      title: "Daily Tracker",
      text: "Here you will find a simple work day calendar that allows the user to enter events by time block and save them.",
      link: "https://jess20005.github.io/Third_Party_APIs/",
    },
    {
      image: "/EmployeeDirectoryScreenshot.png",
      title: "Employee Directory",
      text: "This project I created my first employee directory with React.The process required breaking up the application's UI into components, manage component state, and respond to user events.",
      link: "https://jess20005.github.io/React_Employee_Directory/",
    },
    {
      image: "/teamscreenshot.png",
      title: "Team Profile Generator",
      text: "This is a quick and efficient way to create a team with engineers, interns. You will have the option of creating one manager role with the first prompt.",
      link: "https://github.com/Jess20005/OOP_Team-Profile-Generator",
    },
    {
      image: "/TrackerScreenshot.png",
      title: "Fitness Tracker",
      text: "Here you will find a simple work day calendar that allows the user to enter events by time block and save them.",
      link: "https://guarded-depths-78555.herokuapp.com/?id=60ac17064b63d90015c84e23",
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
