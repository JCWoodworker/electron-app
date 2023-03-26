import React, { useState, useContext } from "react"

import { activeComponentContext } from "../../App"

const Home: React.FC = () => {
	const { activeComponent, setActiveComponent } = useContext(
		activeComponentContext
	)

	return (
		<div className="nav-component">
			<h1>Home</h1>
			<p>----------</p>
			<p>Active Component = {activeComponent}</p>
		</div>
	)
}

export default Home
