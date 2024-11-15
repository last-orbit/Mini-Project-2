import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className='not-found-page'>
      <h1>404 Not Found Page </h1>
          <p>Oops, sorry, that page doesn&apos;t exist</p>
          <Link to="/">Back to Home Page</Link>
    </div>
  );
};

export default NotFound;
