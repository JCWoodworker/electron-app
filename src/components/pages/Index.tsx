import React, { useState, useContext } from "react"

import { activeComponentContext } from "../../App"

import Home from "./Home"
import Nav1 from "./Nav1"
import Nav2 from "./Nav2"
import Nav3 from "./Nav3"
import Nav4 from "./Nav4"

const Index: React.FC = () => {
	const { activeComponent, setActiveComponent } = useContext(
		activeComponentContext
	)

  let componentToShow

  switch (activeComponent) {
    case "Home":
      componentToShow = <Home />
      break
    case "Nav 1":
      componentToShow = <Nav1 />
      break
    case "Nav 2":
      componentToShow = <Nav2 />
      break
    case "Nav 3":
      componentToShow = <Nav3 />
      break
    case "Nav 4":
      componentToShow = <Nav4 />
      break
    default:
      componentToShow = <Home />
      break
  }

	return (
		<div>
      {componentToShow}
		</div>
	)
}

export default Index
