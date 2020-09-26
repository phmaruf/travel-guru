import React from 'react';
import {Button, Card } from 'react-bootstrap';

import { useHistory, Link } from 'react-router-dom';
import './TravelCard.css';

const TravelCard = (props) => {

    const {title, destination, imgUrl, PlaceNo, description} = props.travelInfo;
    
  const history = useHistory()
  const handleBooking = (PlaceNo) => {
        history.push(`/destination/${PlaceNo}`)
  }
    return (
       
        <div className = "card" >  
            <Card style={{ width: '200px', height: '200px', margin: '20px', border: 'none'}}>
                <Link to ={"/destination/"+PlaceNo}>        
                    <Card.Img variant="top" src={imgUrl} />
                </Link>
                <Card.Body>
                    <Card.Title >{title} </Card.Title>
                <Card.Text className="text-primary">
                    {description}
                </Card.Text>
                    <Button  variant="warning" onClick={() => handleBooking(PlaceNo)} >Booking Now</Button>
                </Card.Body>
            </Card>     
        </div>
        
    );
};

export default TravelCard;