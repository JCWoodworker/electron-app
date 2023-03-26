import React, { useState, useContext } from "react"

import { activeComponentContext } from '../../App'

const NavBar: React.FC = () => {

  const { activeComponent, setActiveComponent } = useContext(activeComponentContext)

	const handleNavClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setActiveComponent(e.currentTarget.innerText)
		console.log(`Button clicked = ${e.currentTarget.innerText}`)
	}

	return (
		<div className="navbar">
			<button className="nav-button" onClick={handleNavClick}>
				Home
			</button>
			<button className="nav-button" onClick={handleNavClick}>
				Nav 1
			</button>
			<button className="nav-button" onClick={handleNavClick}>
				Nav 2
			</button>
			<button className="nav-button" onClick={handleNavClick}>
				Nav 3
			</button>
			<button className="nav-button" onClick={handleNavClick}>
				Nav 4
			</button>
		</div>
	)
}

export default NavBar
