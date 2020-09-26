import React from 'react';
import { Card, Button} from 'react-bootstrap';
// import './RoomSelect.css';

const RoomSelect = (props) => {
    console.log(props)
    const { title, description, imgUrl, bedroom, bed, capacity, bath, price } = props.bed;
    return (
        <div>
            <div className="room-container">
                 <Card.Img variant="top" src={imgUrl} />
                       <Card.Body>
                        <Card.Title>{title} </Card.Title>
                        <Card.Text className="text-primary">
                            {description}
                            <p> Bedroom: {bedroom}, Bed: {bed}, Capacity: {capacity} Person, Bath: {bath}.<br/>
                            With Air Conditioned Kitchen<br/> 
                            Cancellation Facility Available
                            </p>                          
                            <p >BDT: {price} Every Night</p>
                        </Card.Text>
                        <Button variant="warning">Book Now</Button>
                    </Card.Body>
            </div>
            {/* <div className="map-container">
                <h1>This is Map Area</h1>
            </div> */}
        </div>
    );
};

export default RoomSelect;