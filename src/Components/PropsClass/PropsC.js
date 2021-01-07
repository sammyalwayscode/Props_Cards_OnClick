import React, { useState } from 'react'
import "../../mvp.css"

function PropsC() {
  const [input, setInput] = useState("")
  const [counting, setCounting] = useState(false)
  return (
    <div>
      <section>
        <form>
          <input placeholder="Enter a value in sec" type="number" onChange={(e) => { setInput(e.target.value) }}
          />
          <button onClick={(e) => {
            e.preventDefault()
            // setCounting(true)
            console.log(input)
          }}>Start</button>
        </form>
      </section>
    </div>
  )
}

export default PropsC
