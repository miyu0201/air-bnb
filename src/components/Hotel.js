import React, { useState } from "react";
import data from "../data";
import Card from "./Card";

const Hotel = () => {
  const [hotel, setHotel] = useState(data);

  const handleClick = (id) => {
    setHotel(prevState => {
      return prevState.map((item) => {
        return item.id === id ? { ...item, star: !item.star } : item;
      });
    });
  };


  // <Card item={item} handleClick={handleClick} />
  const card = hotel.map((item) => (
    <Card item={item} handleClick={() =>handleClick(item.id)}/>
  ));

  console.log(hotel);
  return <div className="cardList">{card}</div>;
};

export default Hotel;
