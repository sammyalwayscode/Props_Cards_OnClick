import React from 'react'
import "./Flutter.css"
import flutterMobile from "../../Img/flutterMobile.svg"

function Flutter({ goOne, setGoOne }) {
  return (
    <div>
      {
        goOne ? <div>
          <div className="mainHold1">
            <div className="cardWordDiv1">
              <div className="cardDiv1"> <div className="imageDivSuv1">
                <img src={flutterMobile} alt="" className="flutterMobile" /></div> </div>
              <div className="wordDiv1">
                <p className="one1">Build a web app<br /> with React Hooks</p>
                <p className="two1">20 SECTIONS - 4 HOURS OF VIDEO</p>
                <p className="three1">Learn how we built the new Design+Code<br /> site with React Hooks using Gatsby, Netlify,<br /> and advanced CSS techniques with Styled<br /> Components.</p>
              </div>
            </div>
          </div>
        </div> : null
      }
    </div>
  )
}

export default Flutter
