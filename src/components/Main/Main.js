import React from 'react';
// import travelPlace from '../../TravelPlace/TravelPlace';
import travelPlace from '../../../src/TravelPlace/TravelPlace';
import TravelCard from '../TravelCard/TravelCard';



const Main = () => {
    return (
    
             <div className='text-light bg-img d-flex justify-content-center m-2 '>
        {
            travelPlace.map(travelCard => <TravelCard  key={travelCard.id} travelInfo={travelCard}> </TravelCard>)
        }

        </div>
    );
};

export default Main;