import React from 'react'

const PictureCard = ({currentApartment}) => {
  return (
    <img src={currentApartment.picture_url} alt="Name picture" />
  )
}

export default PictureCard