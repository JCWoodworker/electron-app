import { useState, createContext } from "react"
import "./App.scss"

import Index from "./components/pages/Index"
import NavBar from "./components/navigation/NavBar"

export const activeComponentContext = createContext<{
	activeComponent: string
	setActiveComponent: React.Dispatch<React.SetStateAction<string>>
}>({
	activeComponent: "",
	setActiveComponent: () => {},
})

const App = () => {
	const [activeComponent, setActiveComponent] = useState("Home")
	console.log(`Active Component State = ${activeComponent}`)

	return (
		<div>
			<div>
				<h1>Desktop Electron App</h1>
			</div>
			<div className="App">
				<activeComponentContext.Provider
					value={{ activeComponent, setActiveComponent }}
				>
					<NavBar />
					<Index />
				</activeComponentContext.Provider>
			</div>
		</div>
	)
}

export default App
