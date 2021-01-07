import React, { useState } from 'react'
import "./HomeCard.css"
import web from "../Img/web.svg"
import Web from '../MovePages/Web/Web'
import flutter from "../Img/flutter.svg"
import swift from "../Img/swift.svg"
import design from "../Img/design.svg"
import effect from "../Img/effect.svg"
import Flutter from '../MovePages/Flutter/Flutter'
import Card2 from './Others/Card2'

function HomeCard() {

  const [go, setGo] = useState(false)
  const [goOne, setGoOne] = useState(false)

  const clickGo = () => {
    setGo(!go)
    console.log(go)
  }

  const clickGoOne = () => {
    setGoOne(!goOne)
    console.log(goOne)
  }


  return (
    <div>


      <div className="parentDiv">
        {
          go ? null : <div className="controllerDiv">
            <div onClick={clickGo} className="cardDivNo1">
              <img src={web} alt="" className="images" />
              <p className="text1">Build a Web App With React Hook</p>
              <p className="text2">20 Videos - 4 Hours</p>
            </div>
          </div>
        }


        {/* {
          go ? null : <div className="controllerDiv">
            <div onClick={clickGo} className="cardDivNo2">
              <img src={flutter} alt="" className="images" />
              <p className="text1">Flutter for Designers</p>
              <p className="text2">23 Videos - 4 Hours</p>
            </div>
          </div>
        } */}

        {/* <Card2 /> */}

        {
          goOne ? null : <div className="controllerDiv">
            <div onClick={clickGoOne} className="cardDivNo2">
              <img src={flutter} alt="" className="images" />
              <p className="text1">Flutter for Designers</p>
              <p className="text2">23 Videos - 4 Hours</p>
            </div>
          </div>
        }

        {
          go ? null : <div className="controllerDiv">
            <div onClick={clickGo} className="cardDivNo3">
              <img src={swift} alt="" className="images" />
              <p className="text1">Swift for i0s 14</p>
              <p className="text2">20 Videos - 3 Hours</p>
            </div>
          </div>
        }

        {
          go ? null : <div className="controllerDiv">
            <div onClick={clickGo} className="cardDivNo4">
              <img src={design} alt="" className="images" />
              <p className="text1">UI Designs for Developers</p>
              <p className="text2">22 Videos - 3 Hours</p>
            </div>
          </div>
        }

        {
          go ? null : <div className="controllerDiv">
            <div onClick={clickGo} className="cardDivNo5">
              <img src={effect} alt="" className="images" />
              <p className="text1">Create a promo Video in After...</p>
              <p className="text2">20 Videos - 4 Hours</p>
            </div>
          </div>
        }

      </div>











      <Web go={go} setGo={setGo} />
      <Flutter goOne={goOne} setGoOne={setGoOne} />
    </div>
  )
}

export default HomeCard
