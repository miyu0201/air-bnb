import React from "react";

const Card = (props) => {
  /* <i
  class="fa-solid fa-star"
  onClick={() => props.handleClick(props.item.id)}
></i>*/
  return (
    <div className="card">
      <div className="card--badge">
        {" "}
        {props.item.openSpots === 0 ? "Sold Out" : "Available"}
      </div>
      <img
        src={require(`../images/${props.item.coverImg}`)}
        className="card--image"
      />
      <h3>{props.item.title}</h3>
      <div className="cardDetail">
        <div id="star" className={props.item.star ? "star_red" : "star_grey"}>
          
          <i
            class="fa-solid fa-star"
            onClick={props.handleClick}
          ></i>
        </div>
        <span>{props.item.stats.rating}</span>
        <span>({props.item.stats.reviewCount}) • </span>
        <span>{props.item.location}</span>
      </div>

      <h4>From ${props.item.price} / night</h4>
    </div>
  );
};

export default Card;
