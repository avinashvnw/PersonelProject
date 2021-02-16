import React from "react"
import ReactDOM from "react-dom"
import landingImage from "./resources/images/coming-soon-1920x1080.jpg"
const App = () => {
  return (
    <div className="image">
      <img class="responsive" src={landingImage} alt="stay tuned" />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector("#root"))
