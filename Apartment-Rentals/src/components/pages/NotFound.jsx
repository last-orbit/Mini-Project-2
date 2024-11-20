import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className='not-found-page'>
      <h1>404 Not Found Page </h1>
      <p>Pay no attention to our mess behind the curtain!</p>
      <p>Remember there is no place like home 🏡</p>
      <Link to='/'>Go Back Home</Link>
    </div>
  );
};

export default NotFound;
