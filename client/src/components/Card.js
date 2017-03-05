import React, { PropTypes, Component } from 'react'

const Card = ({
  image,
  changeFocus,
  index
  }) => (
   <div className={"card-wrapper"}>
        <div className={"card"}>
          <div className={"card-image"} style={image}>
            <div className={"toggle-play-button"}  onMouseEnter={() => {changeFocus(index)}} onMouseLeave={() => {changeFocus(null)}}>
            </div>
          </div>
        </div>
      </div>
  )

Card.propTypes = {
  image: PropTypes.object.isRequired,
  changeFocus: PropTypes.func.isRequired,
  index: PropTypes.func.isRequired
};

export default Card
