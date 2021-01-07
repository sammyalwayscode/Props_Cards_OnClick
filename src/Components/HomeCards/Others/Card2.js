import React, { useState } from 'react'
import "./Card2.css"
import flutter from "../../Img/flutter.svg"
import Flutter from '../../MovePages/Flutter/Flutter'

function Card2() {

  const [goOne, setGoOne] = useState(false)

  const clickGoOne = () => {
    setGoOne(!goOne)
    console.log(goOne)
  }

  return (
    <div>
      <div onClick={clickGoOne} className="cardDivNo2">
        <img src={flutter} alt="" className="images" />
        <p className="text1">Flutter for Designers</p>
        <p className="text2">23 Videos - 4 Hours</p>
      </div>
      <Flutter goOne={goOne} setGoOne={setGoOne} />
    </div>
  )
}

export default Card2
