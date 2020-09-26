import React from 'react';
// import roomInfo from '../../RoomInfo/RoomInfo';
import roomInfo from '../../../src/RoomInfo/RoomInfo';
import RoomSelect from '../RoomSelect/RoomSelect';


const Place = () => {
    return (
        
              <div className="m-5 row" >
           
           <div className='col-md-6'>
           {
           roomInfo.map(bed => <RoomSelect bed={bed}></RoomSelect>)
                                
            }
           </div>
           <div className='col-md-6'>

           </div>
           
        </div>
        
    );
};

export default Place;