import React from 'react';

const MainContainer = () => {
  return (
    <section>
      <div className='flat-container'>
        <div>
          {/* image div */}
          <img src='' alt='flat image' />
        </div>
        <div>
          {/* column 1 */}
          <div>
            <h3>Name</h3>
            <p>ID</p>
            <p>Link to the airbnb page</p>
          </div>
          <div>
            <h3>Host Name</h3>
            <p>Host ID</p>
            <p>Link to the hosts airbnb page</p>
          </div>
          <div>
            <h3>Location</h3>
            <p>City/Neighbourhood</p>
            <p>Country</p>
          </div>
        </div>
        <div>
          {/* column 2 */}
          <div>
            <p>Property Type</p>
            <p>Room Type</p>
            <p>Description</p>
          </div>
          <div>
            <p>nb Room</p>
            <p>nb Beds</p>
            <p>nb Brooms</p>
            <p>Amenties</p>
          </div>
        </div>
        <div>
          {/* column 3 */}
          <div>
            <h4>Price Per Night</h4>
            <p>Min Nights</p>
            <p>/</p>
            <p>Max Nights</p>
          </div>
          <div>
            <h4>Review Score</h4>
            <p>Numbers of reviews</p>
          </div>
          <div>
            <button></button>
            <button></button>
            <button></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContainer;
