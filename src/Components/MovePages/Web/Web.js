import React from 'react'
import "./Web.css"
import reactsvg from "../../Img/react.svg"

function Web({ go, setGo }) {
  return (
    <div>
      {
        go ? <div>
          <div className="mainHold">
            <div className="cardWordDiv">
              <div className="cardDiv"> <div className="imageDivSuv">
                <img src={reactsvg} alt="" className="reactImage" /></div> </div>
              <div className="wordDiv">
                <p className="one">Build a web app<br /> with React Hooks</p>
                <p className="two">20 SECTIONS - 4 HOURS OF VIDEO</p>
                <p className="three">Learn how we built the new Design+Code<br /> site with React Hooks using Gatsby, Netlify,<br /> and advanced CSS techniques with Styled<br /> Components.</p>
              </div>
            </div>
          </div>
        </div> : null
      }
    </div>
  )
}

export default Web
